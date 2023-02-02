interface ICreateUser {
    firstName: string;
    lastName: string;
    email: string;
    password: number;
    userRepository: any;
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const User = require('../../domain/User');

module.exports = ({
    firstName,
    lastName,
    email,
    password,
    userRepository }: ICreateUser) => {
    const user = new User(null, firstName, lastName, email, password);
    return userRepository.persist(user);
}