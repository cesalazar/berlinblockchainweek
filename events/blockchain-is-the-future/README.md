---
# TODO: add SEO fields
title: Blockchain is the future
description: This is a talk about blockchain. This field is indexed by search engines to show as description.

### EVENT DETAILS ###
name: Blockchain is the future

# There _needs_ to be one hyphen before each paragraph.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
synopsis:
  -
    Short description of the event goes here.
  -
    Dolor officiis aliquam eligendi adipisci debitis. Accusamus quis ratione perferendis esse nam. Vero itaque quidem molestias id quo? Deleniti ipsum nobis magni illum quos architecto omnis Modi reprehenderit inventore vitae!
  -
    This is the third paragraph.

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-09-01
# TODO: parse the date
date: 2018-09-01

# Set the time in 24 hours format. If a range is desired, then use a hyphen.
# Example: 18:00-20:00
time: 20:00-21:00

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
    picture: carlos-salazar-sm.png

    # The bio is a single line. Linebreaks are ignored.
    bio: Here goes Carlos' description. Amet corporis laudantium obcaecati perferendis reiciendis rem perferendis. Magni qui reiciendis explicabo autem qui. Tempora quod soluta voluptate dolorum quisquam Voluptatem nam reprehenderit.
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
    picture: carlos-salazar-sm.png

    # The bio is a single line. Linebreaks are ignored.
    bio: Here goes Carlos' description. Amet corporis laudantium obcaecati perferendis reiciendis rem perferendis. Magni qui reiciendis explicabo autem qui. Tempora quod soluta voluptate dolorum quisquam Voluptatem nam reprehenderit.
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
    picture: carlos-salazar-sm.png

    # The bio is a single line. Linebreaks are ignored.
    bio: Here goes Carlos' description. Amet corporis laudantium obcaecati perferendis reiciendis rem perferendis. Magni qui reiciendis explicabo autem qui. Tempora quod soluta voluptate dolorum quisquam Voluptatem nam reprehenderit.

### DON'T MAKE CHANGES BELOW THIS LINE! ###
sidebar: auto
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

# {{ $page.frontmatter.name }}
  <Event-Synopsis/>

## Speakers
  <Event-Speakers/>

## Date
  {{ $page.frontmatter.date }},&nbsp;{{ $page.frontmatter.time }}

## Location
  <Event-MapLink/>

  <Event-TicketsLink/>
