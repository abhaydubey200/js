const MAX = 100;

class Time {
    constructor(hour, minute) {
        this.hour = hour;
        this.minute = minute;
    }
}

class TrainInfo {
    constructor(train_no, train_name, start_st, end_st, dept_time, arr_time) {
        this.train_no = train_no;
        this.train_name = train_name;
        this.start_st = start_st;
        this.end_st = end_st;
        this.dept_time = dept_time;
        this.arr_time = arr_time;
    }
}

function train_edit(train, no_of_trains) {
    let choice;
    let train_num;
    let temp;
    while (true) {
        console.log("\t\t*TRAIN EDIT MENU*\n");
        console.log("1. Add Train.\n");
        console.log("2. Delete Train.\n");
        console.log("3. Exit Train Edit Menu.\n");
        console.log("Your Choice: ");
        choice = parseInt(prompt());
        switch (choice) {
            case 1:
                if (no_of_trains >= MAX) {
                    console.log("\nError! There are already maximum trains.\n\n");
                    break;
                }
                console.log("\nInput Train Number: ");
                temp.train_no = parseInt(prompt());
                for (let i = 0; i < no_of_trains; i++) {
                    if (train[i].train_no === temp.train_no) {
                        console.log("Error! Train number " + temp.train_no + " already exists. Please try again.\n\n");
                        temp.train_no = -1;
                        break;
                    }
                }
                if (temp.train_no === -1)
                    break;
                console.log("Input Train Name: ");
                temp.train_name = prompt();
                console.log("Input Start Station: ");
                temp.start_st = prompt();
                console.log("Input End Station: ");
                temp.end_st = prompt();
                console.log("Input Departure Time: \n");
                console.log("Hour: ");
                temp.dept_time.hour = parseInt(prompt());
                console.log("Minute: ");
                temp.dept_time.minute = parseInt(prompt());
                console.log("Input Arrival Time: \n");
                console.log("Hour: ");
                temp.arr_time.hour = parseInt(prompt());
                console.log("Minute: ");
                temp.arr_time.minute = parseInt(prompt());
                train[no_of_trains] = temp;
                for (let i = no_of_trains; i >= 1; i--) {
                    if (train[i - 1].train_no >= train[i].train_no) {
                        temp = train[i - 1];
                        train[i - 1] = train[i];
                        train[i] = temp;
                    } else {
                        break;
                    }
                }
                no_of_trains = no_of_trains + 1;
                console.log("Train " + train[no_of_trains - 1].train_no + " added successfully.\n\n");
                break;
            case 2:
                if (no_of_trains === 0) {
                    console.log("\nError! No Train Available.\n\n");
                    break;
                }
                console.log("\nInput Train Number: ");
                train_num = parseInt(prompt());
                for (let i = 0; i < no_of_trains; i++) {
                    if (train[i].train_no === train_num) {
                        while (i < no_of_trains - 1) {
                            train[i] = train[i + 1];
                            i++;
                        }
                        no_of_trains = no_of_trains - 1;
                        console.log("Train " + train_num + " deleted successfully.\n\n");
                        train_num = -1;
                        break;
                    }
                }
                if (train_num !== -1)
                    console.log("Error! Train " + train_num + " not found\n\n");
                break;
            case 3:
                console.log("\n");
                return;
            default:
                console.log("\nError! Wrong Choice.\n\n");
        }
    }
}

let no_of_trains = 0;
let choice;
let dept_st, arr_st;
let train_time;
let train = [];
train_edit(train, no_of_trains);
while (true) {
    console.log("\t\t\t*MENU*\n");
    console.log("1. List all the trains departed from a particular station.\n");
    console.log("2. List all the trains departed from a particular station at a particular time.\n");
    console.log("3. List all the trains departed from particular station within the next one hour of a given time.\n");
    console.log("4. List all the trains between a pair of start station and end station.\n");
    console.log("5. Edit train details.\n");
    console.log("6. Exit.\n");
    console.log("Your choice: ");
    choice = parseInt(prompt());
    switch (choice) {
        case 1:
            console.log("\n\t\t*INPUT DETAILS*\n");
            console.log("Depart Station: ");
            dept_st = prompt();
            for (let i = 0; i < no_of_trains; i++) {
                if (train[i].start_st === dept_st) {
                    console.log(train[i].train_no + "\t" + train[i].train_name + "\t" + train[i].start_st + "\t" + train[i].end_st + "\t"
                        + train[i].dept_time.hour + ":" + train[i].dept_time.minute + "\t"
                        + train[i].arr_time.hour + ":" + train[i].arr_time.minute + "\n");
                }
            }
            console.log("\n");
            break;
        case 2:
            console.log("\n\t\t*INPUT DETAILS*\n");
            console.log("Depart Station: ");
            dept_st = prompt();
            console.log("Train Time: \n");
            console.log("Hour: ");
            train_time.hour = parseInt(prompt());
            console.log("Minute: ");
            train_time.minute = parseInt(prompt());
            for (let i = 0; i < no_of_trains; i++) {
                if (train[i].start_st === dept_st && train[i].dept_time.hour === train_time.hour
                    && train[i].dept_time.minute === train_time.minute) {
                    console.log(train[i].train_no + "\t" + train[i].train_name + "\t" + train[i].start_st + "\t" + train[i].end_st + "\t"
                        + train[i].dept_time.hour + ":" + train[i].dept_time.minute + "\t"
                        + train[i].arr_time.hour + ":" + train[i].arr_time.minute + "\n");
                }
            }
            console.log("\n");
            break;
        case 3:
            console.log("\n\t\t*INPUT DETAILS*\n");
            console.log("Depart Station: ");
            dept_st = prompt();
            console.log("Time: \n");
            console.log("Hour: ");
            train_time.hour = parseInt(prompt());
            console.log("Minute: ");
            train_time.minute = parseInt(prompt());
            for (let i = 0; i < no_of_trains; i++) {
                if (train[i].start_st === dept_st && ((train[i].dept_time.hour === train_time.hour
                    && train[i].dept_time.minute >= train_time.minute)
                    || (train[i].dept_time.hour === train_time.hour + 1
                    && train[i].dept_time.minute <= train_time.minute))) {
                    console.log(train[i].train_no + "\t" + train[i].train_name + "\t" + train[i].start_st + "\t" + train[i].end_st + "\t"
                        + train[i].dept_time.hour + ":" + train[i].dept_time.minute + "\t"
                        + train[i].arr_time.hour + ":" + train[i].arr_time.minute + "\n");
                }
            }
            console.log("\n");
            break;
        case 4:
            console.log("\n\t\t*INPUT DETAILS*\n");
            console.log("Depart Station: ");
            dept_st = prompt();
            console.log("Arrival Station: ");
            arr_st = prompt();
            for (let i = 0; i < no_of_trains; i++) {
                if (train[i].start_st === dept_st && train[i].end_st === arr_st) {
                    console.log(train[i].train_no + "\t" + train[i].train_name + "\t" + train[i].start_st + "\t" + train[i].end_st + "\t"
                        + train[i].dept_time.hour + ":" + train[i].dept_time.minute + "\t"
                        + train[i].arr_time.hour + ":" + train[i].arr_time.minute + "\n");
                }
            }
            console.log("\n");
            break;
        case 5:
            console.log("\n");
            train_edit(train, no_of_trains);
            break;
        case 6:
            return 0;
        default:
            console.log("\nError! Wrong Choice.\n\n");
    }
}


