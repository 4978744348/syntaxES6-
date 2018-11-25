let browsers = ['Chrome', 'FireFox', 'Edge', 'Safari', 'Opera'];

for (let browser in browsers){
    console.log(browser); // out indexs
}

for (let index in browsers){
    console.log(browsers[index]); // out values by index
}


for (let browser of browsers){
    console.log(browser); // out values by index
}

