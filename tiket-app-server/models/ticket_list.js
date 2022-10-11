const Tikets = require('./tiket')

class TiketList{

    constructor()
    {
        this.last    = 0
        this.pending = []
        this.asing   = []
    }
    
    get nextTk()
    {
        this.last = this.last + 1
        return this.last ;
    }
    
    get last10()
    {
        return this.asing.slice(0,10)
    }
    
    createTk()
    {
        const newTk = new Tikets(this.nextTk)
        this.pending.push(newTk)
        return newTk
    }
    
    asingTk(agent, desk)
    {
        if(this.pending.length === 0)
            return null
        
        const nextTk = this.pending.shift()

        nextTk.agent=agent
        nextTk.desk=desk

        this.asing.unshift(nextTk)
        return nextTk
    }

}

module.exports = TiketList