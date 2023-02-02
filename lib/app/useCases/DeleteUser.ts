interface IDeleteUser {
    userId: number;
    userRepository: any;
}

module.exports = ({ userId, userRepository }: IDeleteUser) => {
    return userRepository.remove(userId);
}