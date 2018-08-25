---
####################
### INSTRUCTIONS ###
####################
# This file is a template to create new events. In order to use it, duplicate
# the whole folder (/template) as a new folder (I.E. /my-event-name) inside of
# the /events folder, using for the folder name _only_:
# - lowercase letters
# - hyphens/dashes (-) instead of spaces
# - alphanumeric characters ('a' to 'z', '0' to '9')
# and edit the README.md file inside that new folder just created.
#
# The name of the folder will be used on the URL. Example:
# https://blockchainweek.berlin/my-event-name
#
# _Don't_ rename the new file (README.md), only edit its content.
# _Don't_ remove any text before the colons at the beginning of each line,
# only edit what is after the colon. Example:
# Don't remove the word nor colon on 'description:'
#
# Every line starting with a hash symbol (#) is a comment. It will be ignored
# and can be safely removed, including these instructions.
###############


###########
### SEO ###
###########
# The title of the page, displayed by the browser on the title of the window.
# Ideally this is the same as the name of the event.
title: Spacemesh Protocol Meetup

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: Calling all Blockchain tech developers and enthusiasts! Come and
  hear all about the Spacemesh protocol and open source project in our first
  Berlin meetup. We will provide a conceptual overview of the project, and
  present our ideas for using proofs of space time to solve the trustless
  consensus problem in the permissionless settings.

#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: Spacemesh Protocol Meetup

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    This event is part of Blockchain Week Berlin and is designed for
      blockchain tech developers and enthusiasts audience. We will give a
      conceptual overview of the project as well as some technical details about
      our use of proofs of space time to solve the trustless consensus problem
      in the permissionless settings.
  -
    Spacemesh is a fair blockmesh operating system designed to run
      general-purpose smart contracts at web-scale. It is powered by a novel
      consensus protocol that is secure, proof of work free and highly
      incentive-compatible. Spacemesh is designed to create a
      highly-decentralized p2p blockchain computer formed by individuals from
      around the globe running Spacemesh on their desktop PCs at home. Spacemesh
      is a free open source software that aims to become a core Internet
      protocol for blockchain computation.
  -
    '[Watch the Spacemesh video](https://www.youtube.com/watch?v=PB6ZPbxSxm0)'
  -
    For additional information check
      [https://spacemesh.io](https://spacemesh.io)

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2018-09-11
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2018-09-11

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '19:00'
# Time when the event ends. Can be left empty.
endTime: '21:00'

# The URL where to akquire the tickets. Can be left empty.
tickets: https://www.eventbrite.com/e/spacemesh-blockchain-week-berlin-meetup-tickets-48945046953

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue: Mindspace Berlin

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: Krausenstraße 9, 10117 Berlin, Germany

# The category of the event. Valid options:
# - conference
# - event
# - hackathon
# - panel
# - workshop
# Use _only_ one, and don't capitalize.
category: event


#################
### SPEAKERS ####
#################
# There _needs_ to be one hyphen before each entry.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove speakers as needed, but remember the hyphen before each entry.
speakers:
  -
    # Required.
    name: Aviv Eyal

    # Can be left empty.
    title: co-founder

    # Can be left empty.
    company: Spacemesh

    # The full URL, including http(s)://. Can be left empty.
    companyURL: https://spacemesh.io

    # Just the twitter handle, without Twitter's URL, nor the '@' symbol.
    # Can be left empty.
    twitter: avive

    # The full URL, including http(s)://. Can be left empty.
    website: https://spacemesh.io

    # The bio is a single line.
    # Linebreaks are ignored, but they _must_ start with two spaces.
    bio: https://avive.github.io


### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
