export const isDevEnvironment = () => {
	return process.env.REACT_APP_ENV === process.env.REACT_APP_ENV_DEV;
}

export const isLocalEnvironment = () => {
	return process.env.REACT_APP_ENV === process.env.REACT_APP_ENV_LOCAL;
}

export const isProdEnvironment = () => {
	return process.env.REACT_APP_ENV === process.env.REACT_APP_ENV_PROD;
}