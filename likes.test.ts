function likes(param: any[]) {
    if (param.length > 0) {
        return `${param[0]} likes this`;
    }
    return "no one likes this";
}

describe('first_test', () => {
    it("no one likes this", () => {
        expect(likes([])).toBe("no one likes this");
    })
    it("Bernhard likes this", () => {
        expect(likes(["Bernhard"])).toBe("Bernhard likes this");
    })
    it("Stefan likes this", () => {
        expect(likes(["Stefan"])).toBe("Stefan likes this");
    })
});