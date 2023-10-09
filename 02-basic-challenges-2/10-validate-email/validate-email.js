function validateEmail(str) {
    if (!str.includes("@") || !str.includes(".")) {
        return false;
    }

    const [localPart, domain] = str.split("@");

    if (localPart.length === 0 || domain.length === 0) {
        return false;
    }

    const domainExt = domain.split(".");

    if (domainExt.length < 2 || domainExt[domainExt.length - 1].length < 2) {
        return false;
    }

    return true;
}

export default validateEmail;
