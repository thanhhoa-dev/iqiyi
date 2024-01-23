const UserModel = require('./model');
const ResetpasswordModel = require('../resetpassword/model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Mailer = require('../helper/Mailer');
const otpGenerator = require('otp-generator');

// đăng ký tài khoản
const register = async (data) => {
    try {
        const { email, name, password, phone, role, age, gender, avatar } = data;
        // tìm tài khoản email trong db đã có email này chưa
        // mã hóa tài khoản
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = new UserModel({
            email,
            name,
            password: hash,
            phone,
            role,
            age,
            gender,
            avatar
        });
        await user.save();
        // gửi email xác thực tài khoản
        setTimeout(() => {
            Mailer.sendMail({
                email: user.email,
                subject: 'xác thực tài khoản',
                content: `<a href="http://localhost:3000/verify/${user._id}">Click here to verify your account</a>`
            });
        }, 0);
    } catch (error) {
        console.log("create error: ", error);
        throw new Error(error);
    }
}
//forgetpassword
const forgetpassword = async (data) => {
    const { email } = data;
    const otp = otpGenerator.generate(4, { upperCase: false, specialChars: false });
    Mailer.sendMail({
        email: email,
        subject: 'Reset password',
        content: `mã OTP xác thực của bạn là: ${otp}. Vui lòng không cung cấp mã này cho bất kỳ ai.`
    });
    const resetpassword = new ResetpasswordModel({
        email,
        otp
    });
    await resetpassword.save();
    setTimeout(async () => {
        try {
            await ResetpasswordModel.findOneAndDelete({ email: email });
        } catch (error) {
            console.log("deleteRsetpassword error", error);
            throw new Error('Có lỗi xảy ra khi xóa 1 resetpassword');
        }
    }, 60000);
}
// reset pasword
const resetpassword = async (data) => {
    try {
        const { email, otp, newpassword } = data;
        const resetpasscheck = await ResetpasswordModel.findOne({ email: email });
        if (!resetpasscheck) throw new Error('mã otp này đã hết hạn');
        if (otp != resetpasscheck.otp) throw new Error('sai mã otp');
        const userReset = await UserModel.findOne({ email: email });
        if (!userReset) throw new Error('Không tìm thấy tài khoản');
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(newpassword, salt);
        userReset.password = hash;
        userReset.save();
        return 'Cập nhật thành công';
    } catch (error) {
        console.log("updateProduct error", error);
        throw error;
    }


}

// đăng nhập
const login = async (data) => {
    try {
        const { email, password } = data;
        console.log(email, password);
        let user = await UserModel.findOne({ email });

        if (!user) {
            throw new Error('Không tìm thấy tài khoản');
        }

        // Kiểm tra mật khẩu
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new Error('Mật khẩu không chính xác');
        }

        // Ẩn mật khẩu trước khi trả về dữ liệu người dùng
        user.password = undefined;

        // Tạo token sử dụng jwt
        const token = jwt.sign(
            { _id: user._id, email: user.email, role: user.role },
            'thanhhoa',
            { expiresIn: '24h' } // Sử dụng chuỗi thay vì số giây
        );

        // Trả về dữ liệu người dùng kèm theo token
        return { user, token };
    } catch (error) {
        console.error("Login error: ", error.message);
        throw new Error('Có lỗi xảy ra khi đăng nhập');
    }
};

// xác thực tài khoản
const verify = async (id) => {
    try {
        const user = await UserModel.findById(id);
        if (!user) throw new Error('không tìm thấy tài khoản');
        if (user.isVerified) throw new Error('tài khoản đã xác thực rồi');

        user.isVerified = true;
        await user.save();
        return true;
    } catch (error) {
        console.log(error);
        // throw new Error('có lỗi xảy ra khi xác thực tài khoản');
        return false;
    }
};


// get list tai khoan
const getListUser = async () => {
    try {
        const users = await UserModel.find({});
        return users;
    } catch (error) {
        console.log("getAll error: ", error);
        throw new Error('Có lỗi xảy ra khi lấy danh sách user');
    }
}
// lay chi tiet 1 tai khoan
const getUserById = async (id) => {
    try {
        const user = await UserModel.findById(id);
        return user;
    } catch (error) {
        console.log("getOne error: ", error);
        throw new Error('Có lỗi xảy ra khi lấy chi tiết user');
    }
}
// cập nhật sản phẩm
// http://localhost:1996/users/edit/1
// method : PUT
const updateUser = async (id, data) => {
    try {
        const { name, phone, role, age, avatar, gender } = data;
        const user = await UserModel.findById(id);
        if (user) {
            user.name = name || user.name;
            user.phone = phone || user.phone;
            user.role = role || user.role;
            user.age = age || user.age;
            user.avatar = avatar || user.avatar;
            user.gender = gender || user.gender;
            await user.save()
            user.password = undefined;
            return user;
        } else {
            throw new Error('Không tìm thấy user để cập nhật');
        }
    } catch (error) {
        console.log("updateProduct error", error);
        throw error;
    }
}
// app
// kiểm tra tài khoản đã có chưa
const isExist = async (data) => {
    try {
        const { email } = data;
        const user = await UserModel.findOne({ email : email});
        if (user) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log("updateProduct error", error);
        throw error;
    }
}
// đổi mật khẩu
const changePass = async (id, data) => {
    try {
        const { password, newpassword } = data;
        const user = await UserModel.findById(id);
        if (!user) return "không tìm thấy tài khoản";
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) return 'Mật khẩu không chính xác';
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(newpassword, salt);
        user.password = hash;
        user.save();
        return "đổi mật khẩu thành công";
    } catch (error) {
        console.log("updateProduct error", error);
        throw error;
    }
}
module.exports = {
    register,
    login,
    verify,
    getListUser,
    getUserById,
    updateUser,
    forgetpassword,
    resetpassword,
    isExist,
    changePass
}