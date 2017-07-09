/**
 * Created by Asus on 5/10/2017.
 */
const dataAllJob = {
    job: [
        {
            label: "Mobile developer" + " - " + "VNG corp",
            value: 1,
        },
        {
            label: "Senior Java Developer" + " - " + "VNG corp",
            value: 2,
        },
        {
            label: "Senior Java Developer" + " - " + "VNG corp",
            value: 3,
        },
    ]
};

export default function AllJobData (state = dataAllJob, action){
    switch(action.type){
        default:
            return state;
    }
};