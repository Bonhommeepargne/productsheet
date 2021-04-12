export default function getFlux(dataBar, remboursement) {

    // console.log('dataBar :>> ', dataBar);
    // console.log('remboursement :>> ', remboursement);
    let flux = [ -100 ];
    for (let i = 0; i < remboursement.x - 1; i++) {
        flux.push(dataBar[i].y-100);
    }
    flux.push(remboursement.y);

    return flux;

}