var start_prompt = "Correct! You'll now be asked similar questions about various villages. We'll only show you villages that successfully built ships, and we're interested in seeing how responsible you think each craftsperson involved was for the success.";

var example_trial_info = [
    {
        "trial": "E1",
        "prompt1": "Imagine a coastal land with many villages that produce ships. Each ship is made out of wood, metal, and fabric.",
        "slide1": "trials/trialE1-1.png",
        "prompt2": "The villages are inhabited by various craftspeople including carpenters (who work with wood), blacksmiths (who work with metal), and tailors (who work with fabric). Each ship requires one craftsperson of each type to build.",
        "slide2": "trials/trialE1-2.png",
        "prompt3": "Some villages have the same number of each type of craftsperson, but other villages have more of one type and less of another. For instance, the village Aramoor has 3 carpenters, 2 blacksmiths, and 3 tailors.",
        "slide3": "trials/trialE1-3.png",
        "prompt4": "Whenever a village gets an order for a new ship, it must find craftspeople to fulfill the order. Craftspeople tend to be very busy, so many of them have to say \"no\" when asked to help build the ship.",
        "slide4": "trials/trialE1-4.png",
        "prompt5": "Aramoor was unable to find a blacksmith available to help, so unfortunately it failed to build a ship. The craftspeople who were available to help are outlined in red.",
        "slide5": "trials/trialE1-5.png"
    },
    {
        "trial": "E2",
        "prompt3": "As another example, the village Skystead has 4 carpenters, 2 blacksmiths, and 2 tailors.",
        "slide3": "trials/trialE2-3.png",
        "prompt5": "Skystead was able to find one craftsperson of each type available to help (outlined in red), so here building the ship was a success! <br><br> In this experiment, we'll show you scenes like this depicting different villages that successfully built ships. We're interested in seeing how responsible you think each craftsperson who ended up helping was for the success.",
        "slide5": "trials/trialE2-5.png",
        "prompt6": "How responsible was each person (outlined in red) here for the success?",
        "slide6": "trials/trialE2-6.png"
    }
];

var full_trial_info = [
    {
        "trial": "1",
        "prompt3": "The village Llyn has 1 carpenter, 3 blacksmiths, and 2 tailors.",
        "slide3": "trials/trial1-3.png",
        "prompt5": "Llyn was able to find one craftsperson of each type, so it successfully built a ship.",
        "slide5": "trials/trial1-5.png",
        "prompt6": "How responsible was each person (outlined in red) here for the success?",
        "slide6": "trials/trial1-6.png"
    }
];

var condensed_trial_info = [
    {
        "trial": "3",
        "prompt6": "Coalfell has 1 carpenter, 2 blacksmiths, and 1 tailor. <br><br> How responsible was each person (outlined in red) here for the success?",
        "slide6": "trials/trial3-6.png"
    },
    {
        "trial": "4",
        "prompt6": "Romsey has 1 carpenter, 1 blacksmith, and 3 tailors. <br><br> How responsible was each person (outlined in red) here for the success?",
        "slide6": "trials/trial4-6.png"
    }
];

var all_images = [
    "trials/trial1-6.png",
    "trials/trial1-5.png",
    "trials/trial20-6.png",
    "trials/trial3-6.png",
    "trials/trial19-6.png",
    "trials/trial7-6.png",
    "trials/trial1-3.png",
    "trials/trial5-6.png",
    "trials/trial2-6.png",
    "trials/trial21-6.png",
    "trials/trial2-5.png",
    "trials/trialX1-6.png",
    "trials/trial4-6.png",
    "trials/trial18-6.png",
    "trials/trial6-6.png",
    "trials/trial2-3.png",
    "trials/trial14-6.png",
    "trials/trialE1-1.png",
    "trials/trial8-6.png",
    "trials/trial16-6.png",
    "trials/trialE1-3.png",
    "trials/trialE1-2.png",
    "trials/trial12-6.png",
    "trials/trialE1-5.png",
    "trials/trial10-6.png",
    "trials/trialE1-4.png",
    "trials/trial9-6.png",
    "trials/trial17-6.png",
    "trials/trial15-6.png",
    "trials/trialE2-3.png",
    "trials/trial11-6.png",
    "trials/trialE2-6.png",
    "trials/trialE2-5.png",
    "trials/trial13-6.png"
];