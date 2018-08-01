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
# The name of the folder will be used on the URL: https://xxx.com/my-event-name.
#
# _Don't_ rename the new file (README.md), only edit its content.
# Every line starting with a hash symbol (#) is a comment. It will be ignored
# and can be safely removed.
###############


###########
### SEO ###
###########
# The title of the page, displayed by the browser on the title of the window.
# Ideally this is the same as the name of the event.
title: Sample Template

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: This is a talk about blockchain. This field is indexed by search
  engines and used to show a description on /events.


#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: Sample Template

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    Short synopsis of the event goes here. This is the first paragraph.
  -
    Dolor officiis aliquam eligendi adipisci debitis. Accusamus quis ratione
      perferendis esse nam. Vero itaque quidem molestias id quo? Deleniti ipsum
      nobis magni illum quos architecto omnis Modi reprehenderit inventore!
  -
    This is the third paragraph. Add more as needed...

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2018-09-05

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '20:00'

# The URL where to akquire the tickets. Can be left empty.
tickets: https://eventbrite.com/my-event

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 5

# The name of the venue where the event will be held. Can be left empty.
venue: FULL NODE

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: Skalitzer Strasse 85-86, 10997 Berlin, Germany

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
    name: Carlos E. Salazar

    # Can be left empty.
    title: Lead Front-end Developer

    # Can be left empty.
    company: Least Authority

    # The full URL, including http(s)://. Can be left empty.
    companyURL: https://leastauthority.com

    # Just the twitter handle, without Twitter's URL, nor the '@' symbol.
    # Can be left empty.
    twitter: cesalazar

    # The full URL, including http(s)://. Can be left empty.
    website: https://cesalazar.com

    # The bio is a single line.
    # Linebreaks are ignored, but they _must_ start with two spaces.
    bio: Here goes Carlos' description. Amet corporis laudantium obcaecati
      perferendis reiciendis rem perferendis. Magni qui reiciendis explicabo.
  -
    name: Vitalik Buterin
    title: Co-founder
    company: Ethereum
    companyURL: https://ethereum.org/
    twitter: VitalikButerin
    website: https://vitalik.ca
    bio: Vitalik Buterin is a Russian-Canadian programmer and writer primarily
      known as a co-founder of Ethereum and as a co-founder of Bitcoin Magazine.
  -
    name: Kathleen Breitman
    title: CEO
    company: Tezos
    companyURL: https://tezos.com/
    twitter: breitwoman
    website: http://kathleenbreitman.com
    bio: Co-founder at Tezos, a fresh implementation of a blockchain which can
      amend its protocol.

### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
