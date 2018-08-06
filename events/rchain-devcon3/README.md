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
title: RChain Devcon3

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: RCon3 brings together network validators, dApp developers, investors, and researchers learning how to work with the RChain platform and participate in the launch of the RChain testnet.


#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: RChain Devcon3

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -    
    RCon3 brings together network validators, dApp developers, investors, and researchers learning how to work with the RChain platform and participate in the launch of the RChain testnet.
  -    
    RCon3 features four knowledge tracks - RChain technology, blockchain solutions, research, and developing with RChain. There will be hands-on workshops in these areas. Presenters, panelists, and workshop leaders will deliver nearly 50 hours of programming. Additionally, space will be available for participants to network and collaborate.
  -    
    Program highlights include
  -    
    Introductory sessions and deep dives into key components of the RChain platform. including -  Rholang, consensus, storage, and communications.
  -    
    Practical workshops for dApp developers. Learn from sessions working with Rholang and become familiar with the architecture and design patterns of the RChain platform.
  -    
    Launch of the RChain testnet. If you are interested in participating in the launch of mainnet later in 2018, plan to participate in the launch of testnet at RCon3. The program includes informational sessions and workshops for validators and investors on proof of stake economics, infrastructure requirements, and system engineering.
  -    
    Demonstration of the Rhoc/Rev swap. The Rhoc/Rev swap will coincide with the launch of the RChain mainnet later in 2018. Investors and token holders wanting to ensure their REV will be available at the launch of the RChain mainnet should participate.
  -    
    Key signing parties. On-site key signing parties for participants during this event will allow mainnet genesis to be verified and secured by a broad community.


# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2018-09-05
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2018-09-06

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '08:50'
# Time when the event ends. Can be left empty.
endTime: '17:30'

# The URL where to aquire the tickets. Can be left empty.
tickets: https://developer.rchain.coop/conference

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue: bcc Berlin Congress Center GmbH

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: Alexanderstr 11 10178, Berlin, Germany

# The category of the event. Valid options:
# - conference
# - event
# - hackathon
# - panel
# - workshop
# Use _only_ one, and don't capitalize.
category: conference


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
    name: Greg Meredith
    title: President
    company: RChain
    companyURL: https://RChain.Coop
    twitter: leithaus
    website:
    bio: Greg is the President of The RChain Cooperative. Previously he has worked as Principal Architect of Microsoft's BizTalk Process Orchestration, Principal Architect of Microsoft's Highwire offering as well as Principal Architect of ATM Network management solution for ATT/NCR and Co-designer and developer of MCC's Rosette/ESS technology.
  -
    # Required.
    name: Vlad Zamfir

    # Can be left empty.
    title: Lead Casper Researcher

    # Can be left empty.
    company: Ethereum & RChain

    # The full URL, including http(s)://. Can be left empty.
    companyURL:

    # Just the twitter handle, without Twitter's URL, nor the '@' symbol.
    # Can be left empty.
    twitter: VladZamfir

    # The full URL, including http(s)://. Can be left empty.
    website:

    # The bio is a single line.
    # Linebreaks are ignored, but they _must_ start with two spaces.
    bio: Vlad Zamfir is a prominent researcher and commentator in the blockchain ecosystem. He is most known for his research and design work on Casper, the Proof-of-Stake consensus protocol for the Ethereum project. Vlad is an outspoken thought leader on the subjects of Blockchain governance and humanitarian applications for the technology.
  -
    name: Nash Foster
    title: CEO
    company: Pyrofex
    companyURL: https://pyrofex.net/
    twitter: NashEFoster
    website:
    bio: Nash has over 20 years of experience in the computing industry and has served on the engineering staffs of Google, Oracle, Counterpane, iBiblio, and many others. Nash studied mathematics and the theory of computation at the University of North Carolina and George Mason University.
  -
    name: Mike Stay
    title: CTO
    company: Pyrofex
    companyURL: https://pyrofex.net/
    twitter:
    website:
    bio: Mike received his Ph.D. in Computer Science from the University of Auckland in 2015 with a specialization in category theory. Before Pyrofex, Mike worked on software security tools for Google's Ads team.
  -
    name: Luigi D'Onorio DeMeo
    title: Co-Founder
    company: Proof
    companyURL: hhttps://proofmedia.io/
    twitter: luigidemeo
    website:
    bio: For the past eight (8) years, I held various positions including my role as a Trader at Citigroup, specializing in equity securities and credit derivatives.




### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
