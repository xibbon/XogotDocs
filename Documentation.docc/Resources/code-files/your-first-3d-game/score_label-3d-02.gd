extends Label

var score = 0


func _on_mob_squashed(_by):
    score += 1
    text = "Score: %s" % score
