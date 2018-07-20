---
### SEO ###
# The title of the page, displayed on the browser.
title: Blockchain is the future

# Description for this event. This will be rendered as a <meta> tag in the HTML, 
# and used as on the /events page. Keep it short. _No_ linebreaks allowed.
description: This is a talk about blockchain. This field is indexed by search engines to show as description.

### EVENT DETAILS ###
name: Blockchain is the future

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
synopsis:
  -
    Short synopsis of the event goes here. This is the first paragraph.
  -
    Dolor officiis aliquam eligendi adipisci debitis. Accusamus quis ratione perferendis esse nam. Vero itaque quidem molestias id quo? Deleniti ipsum nobis magni illum quos architecto omnis Modi reprehenderit inventore vitae!
  -
    This is the third paragraph. Add more as needed...

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-09-01
date: 2018-09-05

# Set the time in 24 hours format, surrounded by quotes. 
# _Only_ the starting time!
# Example: '18:00'
time: '20:00'

# The URL where to adquire the tickets. Can be left empty.
tickets: https://eventbrite.com/my-event

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 5

# The name of the venue where the event will be held. Can be left empty.
venue: FULL NODE

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: Skalitzer Strasse 85-86, 10997 Berlin, Germany

### SPEAKERS ####
# There _needs_ to be one hyphen before each entry.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
speakers:
  -
    name: Carlos E. Salazar

    # Can be left empty.
    title: Lead Front-end Developer

    # Can be left empty.
    company: Least Authority

    # The full URL, including http(s)://. Can be left empty.
    companyURL: https://leastauthority.com

    # Just the twitter handle, without Twitter's URL. Can be left empty.
    twitter: cesalazar

    # The full URL, including http(s)://. Can be left empty.
    website: https://cesalazar.com

    # TODO: include recommended sizes
    # TODO: solve picture path (not loading)
    picture: search.83621669.svg

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
sidebar: auto
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

# {{ $page.frontmatter.name }}
  <Event-Synopsis/>

## Speakers
  <Event-Speakers/>

## Date
  <Event-DateTime/>

## Location
  <Event-MapLink/>

## Tickets
  <Event-TicketsLink/>
