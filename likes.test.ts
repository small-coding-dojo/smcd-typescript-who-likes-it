function likes(param: any[]) {
    return "no one likes this";
}

describe('first_test', () => {
    it("no one likes this", () => {
        expect(likes([])).toBe("no one likes this");
    })
});