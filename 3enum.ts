enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]
console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
    VK = 'Vkontakte',
    FB = 'Facebook',
    IG = 'Instagram'
}

const social = SocialMedia.IG
console.log(social)