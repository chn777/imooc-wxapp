let classicBeh = Behavior({
    behaviors: [],
    properties: {
        img: String,
        content: String,
        hidden:Boolean
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