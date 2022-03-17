export default function getColor(department) {
    const value = department ? department.toLowerCase() : "";
    if (value === "copywriting") {
        return "pink"
    } else if (value === "illustration") {
        return "green"
    } else if (value === "ui design") {
        return "blue"
    } else return "theme"
}