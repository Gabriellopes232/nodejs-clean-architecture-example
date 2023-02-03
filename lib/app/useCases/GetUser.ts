interface IGetUser {
    userId: number;
    userRepository: any
}

module.exports = ({ userId, userRepository }: IGetUser) => {
    return userRepository.get(userId)
}