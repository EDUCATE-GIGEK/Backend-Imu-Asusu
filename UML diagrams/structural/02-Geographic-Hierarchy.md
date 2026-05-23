# Geographic Hierarchy

```mermaid
classDiagram
    class Continent {
        +UUID id
        +String code
        +String name
        +String shortDescription
    }

    class Country {
        +UUID id
        +UUID continentId
        +String name
        +String isoCode
        +String shortDescription
        +String history
    }

    class State {
        +UUID id
        +UUID countryId
        +String name
        +String shortDescription
    }

    class LocalGovernment {
        +UUID id
        +UUID stateId
        +String name
    }

    Continent "1" -- "*" Country : contains
    Country "1" -- "*" State : contains
    State "1" -- "*" LocalGovernment : contains
```

## Description

The backbone of the app's content: a strict containment hierarchy that mirrors
how users drill down through the UI (continent map → country page → state page
→ local government). `Continent.code` holds the two-letter labels shown on the
world map (AF, AS, EU, NA, SA, AN, AU). Each level has its own short
description so the UI can show a summary before the user clicks in. "Province"
in the sketches is treated as a synonym for `State` here.
