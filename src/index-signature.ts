export {}

let profile: { name?: string } = {}

profile.name = "Aerith"

//あとからプロパティが加わったときにも対応したい
// profile.age = 22

//index-signiture
let data: {
    name: string;
    underTwenty: boolean;
    [index: string ]: string | number | boolean
} = { name: "Cloud", underTwenty: true }

data.name = "Cloud"
data.age = 21
data.job = "solider"