const initialState = {
    jokes:[{
        category: "Pun",
        type: "single",
        joke: "How do you make holy water? You freeze it and drill holes in it.",
        flags: {
        nsfw: false,
        religious: true,
        political: false,
        racist: false,
        sexist: false
        },
        id: 205,
        lang: "en"
        },
        {
        category: "Programming",
        type: "single",
        joke: "Debugging: Removing the needles from the haystack.",
        flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false
        },
        id: 40,
        lang: "en"
        },
        {
        category: "Miscellaneous",
        type: "single",
        joke: "Schrödinger's cat walks into a bar and doesn't.",
        flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false
        },
        id: 199,
        lang: "en"
        },],
    loadingJokes: true,
    errorMessage: ''
}

export default (state=initialState, action) => {
    switch(action.type) {
        default: return state
    }
}