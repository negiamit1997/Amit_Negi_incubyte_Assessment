export function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 15);  // Generate random string
    const email = `${randomString}@a.com`;  // Append @example.com to the random string
    return email;
}