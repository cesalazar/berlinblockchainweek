---
####################
### INSTRUCTIONS ###
####################
# This file is a template to create new events.
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
title: Automated Smart Contract Security Analysis

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: This workshop will instruct participants in how to use and
  develop tooling that finds real smart contract bugs. We'll get hands-on with
  best-in-class tools and even write our own scripts to comprehensively detect
  whole classes of bugs.


#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: Automated Smart Contract Security Analysis

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    This workshop covers how to use automated smart contract analysis
      tooling from a practitioner's perspective. After taking this workshop,
      participants will be able to both use off-the-shelf tooling and write
      their own analyses to find large classes of real-world bugs.
  -
    "We'll begin with an overview of different types of tooling and their
      strengths and weaknesses. After that, we'll take two deep dives: First,
      we'll design property-based tests that let us quickly fuzz a contract
      and even generate minimal exploits for a given bug. Then, we'll use a
      symbolic executor to either find extreme edge case bugs or formally
      verify no such bugs exist."
  -
    Participants should be experienced in Solidity, and ideally Python, but
      no deep security experience is needed. This is a great workshop for
      smart contract developers who want to start making their development
      lifecycle more secure, or anyone interested in security automation in
      the blockchain space.

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2018-09-11
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2018-09-11

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '13:00'
# Time when the event ends. Can be left empty.
endTime: '19:00'

# The URL where to akquire the tickets. Can be left empty.
tickets: https://docs.google.com/forms/d/e/1FAIpQLScId2v45NHt2-Dd4lPpq3oXKyaEZI0XJsvCtpoWcnqIEN9Jfw/viewform

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue: rent24

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: Oberwallstrasse 6, 10117 Berlin, Germany

# The category of the event. Valid options:
# - conference
# - event
# - hackathon
# - panel
# - workshop
# Use _only_ one, and don't capitalize.
category: workshop


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
    name: JP Smith

    # Can be left empty.
    title: Security Engineer

    # Can be left empty.
    company: Trail of Bits

    # The full URL, including http(s)://. Can be left empty.
    companyURL: https://www.trailofbits.com/

    # Just the twitter handle, without Twitter's URL, nor the '@' symbol.
    # Can be left empty.
    twitter: japesinator

    # The full URL, including http(s)://. Can be left empty.
    website: https://github.com/japesinator

    # The bio is a single line.
    # Linebreaks are ignored, but they _must_ start with two spaces.
    bio: JP is a security engineer at Trail of Bits and the lead developer
      of Echidna, the first fuzzer targeting smart contracts.

### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
