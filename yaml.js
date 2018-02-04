
var yaml = `

# This is the list of intents and tactics the roller will use. To add new ones
# just follow the format below and inster the option into the range that makes
# the most sense.

#------- Intents ------------
#0 -> 4
hate:
- They want to deceive you
- They want to hurt you as much as possible
- They want to make you doubt yourself
- They want to make you doubt your beliefs
- They want to get you to give them a reason to hurt you
- They want to get you to sign your own death warrant

#5 -> 9
dislike:
- They want to get you to grow away from them
- They want to get you to not talk to someone
- They want to get you to not talk about something
- They want to get you to not talk to them
- They want to get you to go away
- They want to get you to do something dangerous for them

#10 -> 19
neutral:
- They want to get you to open up
- They want to get you to tell them the truth about something
- They want to get you to explain yourself
- They want to get you to talk about something they enjoy
- They want to get you to talk about something you hate
- They want to get you to talk about a recent event
- They want to get you to talk about your past
- They want to get you to examine something they have
- They want to get you to guess about the future
- They want to get you to talk about someone else
- They want to get you to go with them somewhere
- They want to get you to make a judgment
- They want to get you to talk to someone else
- They want to get you to do something for them


#20 -> 24
like:
- They want to get you to grow closer to them
- They want to ask for your advice about a problem with a relationship
- They want to ask for your advice about a problem
- They want to ask if you need help
- They want to get you to do something important for them



#25 -> infinity
love:
- They want to get you to flirt with them
- They want to get you to kiss them
- They want to get you to spend more time with them
- They want to get you to do something meaningful for them
- They want to get you to let them help you

#------ Tactics -------------

tactics:
- They will do this by arguing
- They will do this by joking
- They will do this by beging
- They will do this by stating how it is
- They will do this by bargaining
- They will do this by beating around the bush
- They will do this by lieing
- They will do this by telling it to you straight
- They will do this by playing to your nature
- They will do this by playing to your beliefs
- They will do this by talking of your past



`;
