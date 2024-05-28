function integerCheacker(val) {
    if (typeof (val) != "number") {
        throw new Error('aae');
    } else {
        console.log(val, "is an integer");
    }
}

integerCheacker(0)