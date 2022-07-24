const package = [
    {
        heavy: false,
        priority: true,
        fragile: true,
        to: 'Mark',
        trackingNumber: '1325sdk'
    },
    {
        heavy: true,
        priority: false,
        fragile: true,
        to: 'Mick',
        trackingNumber: 'jffd147'
    },
    {
        heavy: false,
        priority: false,
        fragile: false,
        to: 'Jake',
        trackingNumber: 'acdc145'
    }
]




let currentPackage = package

function randomPackage() {
    let randomPackage = package[Math.floor(Math.random()) * package.length]
    console.log(`random`, randomPackage);

}

function drawPackage() {
    let template = ''
    currentPackage.forEach(p => template += `div class="col-4 btn btn-primary" onclick="find()">Heavy</div>`)
    let packageElm = document.getElementById('packages')
    packageElm.innerHTML = template
}

drawPackage()

function packageHeavy() {
    for (let i = 0; i = package.heavy; i++) {
        let packages = package.heavy[i];

    }
    if (packages == true) {
        window.alert(`Package Found`)
    } else {
        window.alert('Package not found')
    }
    let p = document.getElementById('packages')
    drawPackage()
}

function packageTo(to) {
    let name = package.find(p => p.to == to)
    console.log('found', name);


    drawPackage()
}

function find(to) {
    let finding = package.find(p => p.to == to);
    console.log('Finding', to, finding);

    drawPackage()
}

function fragile() {
    for (let i = 0; i = package.fragile; i++) {
        let packages = package.fragile[i];

    }
    if (packages == true) {
        window.alert(`Package Found`)
    } else {
        window.alert('Package not found')
    }
    let p = document.getElementById('packages')
    drawPackage()
}
