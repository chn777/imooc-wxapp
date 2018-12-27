let classicBeh = Behavior({
    behaviors: [],
    properties: {
        img: String,
        content: String
    },
    data: {
    },
    attached() {
        console.log("behaviors 的 attached")
    },
    methods: {
    }
});

export {classicBeh}