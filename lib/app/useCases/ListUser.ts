interface IListUser {
    userRepository: any
}

module.exports = ({ userRepository }: IListUser) => {
    return userRepository.find()
}