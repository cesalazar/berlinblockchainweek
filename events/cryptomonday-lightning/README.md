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
title: CryptoMonday Lightning

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: CryptoMonday is a growing community all over Germany. We invite
  experts like Andreas Antonopoulos, developers from RSK or law experts on the
  current aspects of regulation and tax.


#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: CryptoMonday | Functionality and Potential of Lightning Network

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    CryptoMonday is a growing community all over Germany.
  -
    We invite experts like Andreas Antonopoulos, developers from RSK or law
      experts on the current aspects of regulation and tax.
  -
    'Today we’re hosting a Lightning-talk and focus on Layer2: We give an
      introduction to what the lightning network aims to provide to the
      community and how it is planning on achieving it. What might be current
      shortcomings and road blocks, how can those be overcome? We’ll follow an
      technical approach and like to give visitors an opportunity to get started
      on their own. We are happy to welcome our colleague, a vivid bitcoin and
      lightning, who has been visiting the Lightning Hackday by Fulmo only a
      couple days prior and also hosts the second biggest lightning node to
      share his gained insights. Join him for nice talks and drinks at the KI
      decentralized offices to celebrate the red crypto wedding.'

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2018-09-10
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2018-09-10

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '19:00'
time: '20:00'
# Time when the event ends. Can be left empty.
endTime: '21:00'

# The URL where to akquire the tickets. Can be left empty.
tickets: https://www.eventbrite.de/e/cryptomonday-functionality-and-potential-of-lightning-network-tickets-49215769692

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue: KI Group office


# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: Karl-Marx-Allee 90C, 10243 Berlin, Germany

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
    name: Constantin Vennekel

    # Can be left empty.
    title: Blockchain Expert & Editor & professional Bitcoin-shill at base58.de

    # Can be left empty.
    company: KI decentralized

    # The full URL, including http(s)://. Can be left empty.
    companyURL: https://www.ki-decentralized.com/

    # Just the twitter handle, without Twitter's URL, nor the '@' symbol.
    # Can be left empty.
    twitter: vnnkl

    # The full URL, including http(s)://. Can be left empty.
    website:

    # The bio is a single line.
    # Linebreaks are ignored, but they _must_ start with two spaces.
    bio: Constantin took an early interest in cryptocurrencies end of 2011 and
      pursued as one of the first a Master Degree (MSc) in Digital Currencies
      to focus on related fields such as, Disruptive Innovation, Blockchain
      Technology and Applications, Open Financial Systems, Money and Banking.
      Before joining KI, he worked as a developer within the Bitcoin wallet
      and Ethereum energy related space.
  -
    name: Mirco Recksiek
    title: Cryptocurrency Researcher & Product Owner
    company: KI decentralized
    companyURL: https://www.ki-decentralized.com/
    twitter: mirconomy
    website:
    bio: Mirco is a certified banker and graduated with a Master degree in
      Business Administration at the University of Cologne. In his thesis, he
      investigated the impact of blockchain and digital assets on current
      business models and industries. Since his first investments in
      Cryptocurrencies, he is enthusiastic for the disruptive potential of
      blockchain and always up to date about new projects in the crypto-scene.


### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
