import webNavigator from '../constants/webNavigator.json';

const data = [...webNavigator]

export default function getPageTitle(url) {
    return data.filter(data => data["url"] === url)[0]["title"]
}