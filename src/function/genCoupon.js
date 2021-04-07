export default function genCoupon(data, coupon, barr_anticipe) {

    let tab = [];
    for (let i = 1; i < data.length; i++) {
        if (Number.isInteger(data[i].x) && data[i].y > barr_anticipe) {
            tab.push({ x: data[i].x, y: coupon + 100 })
        }
    }

    return tab;
}