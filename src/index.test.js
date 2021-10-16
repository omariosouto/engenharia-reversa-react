const rewire = require("rewire")
const index = rewire("./index")
const convertToHtml = index.__get__("convertToHtml")
const render = index.__get__("render")
const createElement = index.__get__("createElement")
const Title = index.__get__("Title")
// @ponicode
describe("convertToHtml", () => {
    test("0", () => {
        let callFunction = () => {
            convertToHtml({ tagName: "4.0.0-beta1\t", props: { children: { forEach: () => "George" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            convertToHtml({ tagName: "^5.0.0", props: { children: { forEach: () => "George" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            convertToHtml({ tagName: "4.0.0-beta1\t", props: { children: { forEach: () => "Edmond" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            convertToHtml({ tagName: "v1.2.4", props: { children: { forEach: () => "Pierre Edouard" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            convertToHtml({ tagName: "^5.0.0", props: { children: { forEach: () => "Michael" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            convertToHtml(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("render", () => {
    test("0", () => {
        let callFunction = () => {
            render("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            render("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            render("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            render("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            render("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E", "George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            render(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("createElement", () => {
    test("0", () => {
        let param2 = [["Edmond", "Pierre Edouard", "Anas"], ["George", "George", "Anas"], ["Edmond", "Pierre Edouard", "Anas"]]
        let callFunction = () => {
            createElement(() => "movies", param2, [false, false, false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [["Jean-Philippe", "Anas", "Anas"], ["Michael", "George", "Pierre Edouard"], ["Anas", "Jean-Philippe", "George"]]
        let callFunction = () => {
            createElement(() => "sets", param2, [false, true, false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [["Jean-Philippe", "Edmond", "Jean-Philippe"], ["Michael", "George", "Pierre Edouard"], ["Pierre Edouard", "Pierre Edouard", "Pierre Edouard"]]
        let callFunction = () => {
            createElement(() => "text/plain", param2, [false, false, false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [["George", "George", "Anas"], ["Jean-Philippe", "George", "Pierre Edouard"], ["Pierre Edouard", "Edmond", "Anas"]]
        let callFunction = () => {
            createElement(() => "new_chat_member", param2, [true, true, false])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [["Pierre Edouard", "Pierre Edouard", "Michael"], ["Pierre Edouard", "Michael", "George"], ["Pierre Edouard", "Anas", "Michael"]]
        let callFunction = () => {
            createElement(() => "xhtml", param2, [false, true, true])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            createElement(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Title", () => {
    test("0", () => {
        let callFunction = () => {
            Title()
        }
    
        expect(callFunction).not.toThrow()
    })
})
