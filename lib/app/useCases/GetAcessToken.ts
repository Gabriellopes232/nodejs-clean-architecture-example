interface IGetAcessToken {
    email: string;
    password: number;
    userRepository: any;
    acessTokenManager: any;
}

module.exports = async ({ email, password, userRepository, acessTokenManager }: IGetAcessToken) => {
    const user = userRepository.getByEmail(email);

    if (!user || user.password !== password) {
        throw new Error('Bad credentials')
    }
    return acessTokenManager.generate({ uid: user.id })
}