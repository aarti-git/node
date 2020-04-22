function human(color, isHandicap, gender){
    var _this = this
    this.color = color
    this.isHandicap = isHandicap
    this.gender = gender
    
    this.objectInfo.count++

    return this
}

human.prototype.objectInfo = { count: 0 }
human.prototype.isWalkable = function(){
    return !this.isHandicap
}