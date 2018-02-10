
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
- They want you to give them a reason to hurt you
- They want to get you to sign your own death warrant

#5 -> 9
dislike:
- They want to upset you
- They want you to not talk to someone
- They want you to not talk about something
- They want you to not talk to them
- They want you to go away
- They want you to do something dangerous for them

#10 -> 19
neutral:
- They want you to open up
- They want you to tell them the truth about something
- They want you to explain yourself
- They want you to talk about something they enjoy
- They want to talk about something you hate
- They want you to talk about a recent event
- They want you to talk about your past
- They want you to examine something they have
- They want you to guess about the future
- They want you to talk about someone else
- They want you to go with them somewhere
- They want you to make a judgment
- They want you to talk to someone else
- They want you to do something for them


#20 -> 24
like:
- They want you to grow closer to them
- They want to ask for your advice about a problem with a relationship
- They want to ask for your advice about a problem
- They want to ask if you need help
- They want to get you to do something important for them



#25 -> infinity
love:
- They want you to flirt with them
- They want you to kiss them
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
