const weekList = [1,2,3,4,5,6]
//Modify this section for the revision word
const revisionWord =          {
        word: "Vagary", type: "noun",
        meaning: [
            "A whimsical, wild, or unusual idea, desire, or action.",
            "An unexpected and inexplicable change in a situation or in someone's behavior."
        ]
    };

const words = [
    {
        word: "Surfeit",
        type: "noun",
        meaning: [
            "Cause (someone) to desire no more of something as a result of having consumed or done it to excess.",
            "Excessive amount of something."
        ]
    },
    {
        word: "Captious",
        type: "adjective",
        meaning: [
            "Tending to find a fault on petty objections",
            "Calculated to confuse, entrap or entangle in argument"
        ]
    },
    {
        word: "Lassitude", type: "noun",
        meaning: [
            "Lethargy, sluggishness",
            "State of physical or mental weariness",
            "Lack of energy"
        ]
    },
    {
       word: "Calumny", type: "noun",
       meaning: [
           "Making of false and defamatory statements about someone in order to damage their reputation",
           "Slander"
        ]
    },
    {
        word: "Pertinacious", type: "adjective",
        meaning: [
            "Holding firmly to an opinion or a course of action.",
            "Extremely or objectionably persistent."
        ]
    },
    {
        word: "Dross", type: "noun",
        meaning: [
            "Something regarded as worthless",
            "Rubbish"
        ]
    },
    {
        word: "Modicum", type: "noun",
        meaning: [
            "Small portion",
            "Limited quantity"
        ]
    },
    {
       word: "Listless", type: "adjective",
       meaning: [
           "Having or showing little or no interest in anything",
           "Characterized by lack of interest, energy or spirit"
        ]
    },
    {
        word: "Indolence", type: "noun",
        meaning: [
            "Avoidance of activity or exertion",
            "Laziness",
            "Idleness"
        ]
    },
    {
        word: "Fervent", type: "adjective",
        meaning: [
            "Having or displaying a passionate intensity"
        ]
    },
       {
        word: "Mellifluous",
        type: "adjective",
        meaning: [
            "(of a voice or words) sweet or musical",
            "Pleasant to hear, having a smooth rich flow honey like"
        ]
    },
    {
        word: "Obsequious",
        type: "adjective",
        meaning: [
            "Excessively compliant or submissive"
                 ]
    },
    {
        word: "Sanguine", type: "adjective",
        meaning: [
            "Optimistic or positive, especially in an apparently bad or difficult situation",
            "Marked by eager hopefulness",
            "Confidently optimistic"
        ]
    },
    {
       word: "Pellucid", type: "adjective",
       meaning: [
           "Clear in meaning, expression or style"
        ]
    },
    {
        word: "Imbroglio", type: "noun",
        meaning: [
            "A complicated situation.",
            "An extremely confused, complicated, or embarrassing situation."
        ]
    },
    {
        word: "Nugacity", type: "noun",
        meaning: [
            "A trivial or frvolous thing or idea",
            "Insignificant"
        ]
    },
    {
        word: "Fabulist", type: "noun",
        meaning: [
            "A person who invents elaborate, dishonest stories"
        ]
    },
    {
       word: "Balk", type: "verb",
       meaning: [
           "Hesitate or be unwilling to accept an idea or undertaking"
        ]
    },
    {
        word: "Perfunctory", type: "adjective",
        meaning: [
            "Performed merely as a routine duty",
            "Hasty and superficial",
            "(of an action or gesture) carried out with a minimum of effort or reflection."
        ]
    },
    {
        word: "Placid", type: "adjective",
        meaning: [
            "(of a person or animal) not easily upset or excited",
            "Even tempered",
            "Calm"
        ]
    },
    {
        word: "Irascible", type: "adjective",
        meaning: [
            "Having showing a tendency to be easily angered"
        ]
    },
    {
        word: "Stolid", type: "adjective",
        meaning: [
            "Having or expressing little or no sensibility",
            "(of people) not very exciting or interesting",
            "Unemotional/impassive"
        ]
    },
    {
        word: "Salubrious", type: "adjective",
        meaning: [
            "Favorable to or promoting health or well-being"
        ]
    },
   {
        word: "Disquisition", type: "noun",
        meaning: [
            "A formal discussion on a subject",
            "Discourse or dissertation"
        ]
    },
    {
        word: "Sedulous", type: "adjective",
        meaning: [
            "(of a person or action) showing dedication and diligence.",
            "Persistently or carefully maintained:"
        ]
    },
    {
        word: "Perennial", type: "adjective",
        meaning: [
            "Everlasting/Eternal/Unending",
            "Lasting or existing for a long or apparently infinite time",
            "Enduring or continually recurring"
        ]
    },
   {
        word: "Ornery", type: "adjective",
        meaning: [
            "Having an irritable disposition",
            "Bad tempered and combative",
            "Difficult to deal with"
        ]
    },
   {
        word: "Imperious", type: "adjective",
        meaning: [
            "Assuming power or authority without justification",
            "Arrogant and domineering",
            "Intensely compelling,Urgent"
        ]
    },
   {
        word: "Perfidious", type: "adjective",
        meaning: [
            "Deceitful and untrustworthy.",
            "Disloyal, faithless"
        ]
    },
   {
        word: "Impecunious", type: "adjective",
        meaning: [
            "Poor, having no money."
        ]
    },
   {
        word: "Vagary", type: "noun",
        meaning: [
            "A whimsical, wild, or unusual idea, desire, or action.",
            "An unexpected and inexplicable change in a situation or in someone's behavior."
        ]
    },
   {
        word: "Banality", type: "noun",
        meaning: [
            " Devoid of freshness or originality",
            "Boring",
                "Something commonplace/routine"
        ]
    },
   {
        word: "Vestige", type: "noun",
        meaning: [
            "A trace of something that is disappearing or no longer exists (remanant);",
            "The smallest amount (used to emphasize the absence of something"
        ]
    },
    {
        word: "Pejorative", type: "adjective",
        meaning: [
            "Expressing contempt or disapproval",
            "Having negative connotation",
            "Tending to belittle"
        ]
    },
   {
        word: "Plaintive", type: "adjective",
        meaning: [
            "Expressive of suffering or woe.",
            "Sounding sad and mournful"
        ]
    },
   {
        word: "Quaint", type: "adjective",
        meaning: [
            "Strange, peculiar, or unusual in an interesting, pleasing, or amusing way",
            "Having an old-fashioned attractiveness or charm; oddly picturesque"
        ]
    },
    {
        word: "Propinquity", type: "noun",
        meaning: [
            "Nearness in place; proximity",
            "Nearness of relation; kinship.",
            "Affinity of nature; similarity.",
            "Nearness in time"   
        ]
    },
    {
        word: "Commiseration", type: "noun",
        meaning: [
            "Sympathy and sorrow for the misfortunes of others",
            "Compassion.",
            "Expressions of sympathy and sorrow for another."
        ]
    },
   {
        word: "Bellicose", type: "adjective",
        meaning: [
            "Inclined or eager to fight",
            "Aggressively hostile"
        ]
    },
   {
        word: "Risible", type: "adjective",
        meaning: [
            "Causing or capable of causing laughter; laughable; ludicrous.",
            "Having the ability, disposition, or readiness to laugh.",
            "Pertaining to or connected with laughing."
        ]
    },
    {
        word: "Axiomatic", type: "adjective",
        meaning: [
            "Self-evident or unquestionable",
        ]
    },
   {
        word: "Eschew", type: "verb",
        meaning: [
            "To abstain or keep away from",
             "avoid"
        ]
    },
    {
        word: "Incisive", type: "adjective",
        meaning: [
            "Remarkably clear and direct",
            "Sharp; keen; acute:",
            "Penetrating; cutting; biting"
        ]
    } 
]
