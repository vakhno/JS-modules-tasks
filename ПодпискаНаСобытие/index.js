module.exports = {
    allusers: [],

    on: function (event, subscriber, handler) {
        this.allusers.push({
            nameEvent: event,
            subscriber: subscriber,
            handler: handler
        });

        return this;
    },

    off: function (event, subscriber) {
        let deleteIndex = -1;
        this.allusers.findIndex( (elem, index) => {
            if(elem.subscriber == subscriber && elem.nameEvent == event){
                deleteIndex = index;
                return index;
            }
        });

        if (deleteIndex != -1) {
            this.allusers.splice(deleteIndex, 1);
            return this.off(event, subscriber);
        } else {
            return this;
        }
    },

    emit: function (event) {
        for(let item of this.allusers) {
            if ( item.subscriber != undefined && item.handler != undefined && item.nameEvent == event ) {
                item.handler.call(item.subscriber);
            }
        }
        return this;
    }
};
