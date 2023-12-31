function likes(param: any[]) {
    if (param.length == 3) {
        return `${param[0]}, ${param[1]} and ${param[2]} like this`;
    }
    if (param.length == 2) {
        return `${param[0]} and ${param[1]} like this`;
    }
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
    it("Stefan and Bernhard like this", () => {
        expect(likes(["Stefan", "Bernhard"])).toBe("Stefan and Bernhard like this");
    })
    it("Bernhard and Stefan like this", () => {
        expect(likes(["Bernhard", "Stefan"])).toBe("Bernhard and Stefan like this");
    })
    it("Bernhard, Stefan and Niklas like this", () => {
        expect(likes(["Bernhard", "Stefan", "Niklas"])).toBe("Bernhard, Stefan and Niklas like this");
    })
});