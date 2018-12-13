export class Temperature {
    constructor(node_id:number=null, temperature:number=null, timestamp:Date=null){
        this.node_id = node_id;
        this.temperature = temperature;
        this.timestamp = timestamp;
    }
    node_id:number;
    temperature:number;
    timestamp:Date
}