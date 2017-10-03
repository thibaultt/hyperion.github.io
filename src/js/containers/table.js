import React from 'react';
import tl from "../../images/tl.png";
import rv from "../../images/rv.png";
import lg from "../../images/lg.png";
import pv from "../../images/pv.png";

import auda from "../../images/auda.png";
import gimp from "../../images/gimp.png";
import git from "../../images/git.png";
import visual from "../../images/visual.png";
import unity from "../../images/unity.png";
import mono from "../../images/mono.png";

import win from "../../images/wind.png";
import mac from "../../images/mac.png";


import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 10,
    },
};

export default class Table extends React.Component {

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    render() {
        return (
            <div>
                <Tabs
                    inkBarStyle={{
                        backgroundColor: "#fddb21",
                    }}
                    tabItemContainerStyle={{
                        backgroundColor: "#0c2b69",
                    }}
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab label="Acceuil" value={0} style={{color: "#fddb21",}}/>
                    <Tab label="Info" value={1} style={{color: "#fddb21",}}/>
                    <Tab label="Jouer" value={2} style={{color: "#fddb21",}}/>
                    <Tab label="Histoire" value={3} style={{color: "#fddb21",}}/>
                    <Tab label="Studio404" value={4} style={{color: "#fddb21",}}/>

                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}

                >
                    <div className={"introduction"}>
                        <h2> Introduction </h2>
                        <p>
                            Le second semestre de prépa nous offre un défi à relever pour le cours
                            d’informatique pratique: les élèves doivent réaliser un jeu vidéo ou un logiciel de leur
                            cru.
                            Notre groupe de quatre élèves, Thibault Lhuillier, Paul Varet, Louis Géraud, et Romain
                            Vidal,
                            a donc décidé pour relever ce défi de former le Studio 404. En même temps nous avons lancé
                            le projet de jeu vidéo Hypérion.
                        </p>
                        <p> Hyperion est un jeu de type FPS (First Person Shooter) qui prend place dans un univers
                            fictif et futuriste, appelé la Frange. Un monde où la plupart des planètes sont peuplées de
                            plusieurs formes de vie toutes plus dangereuses les unes que les autres pour l'homme.
                            Rejoignez
                            l'équipe du légendaire vaisceau spatial Hyperion dans sa quête de déalienisation de
                            l'univers.
                            Hyperion propose trois modes de jeux différents.
                        </p>
                        <p> Plongez vous dans une campagne immersive dans laquelle le joueur doit combatres des forces
                            aliens variées sur différentes planètes avec des environnements mettant à l'épreuve la
                            capacité
                            d'improvisation du joueur.
                        </p>
                        <p> Affrontez vos amis dans des combats endiablés, pour enfin savoir qui est le meilleur parmis
                            vous.
                            Choisissez parmis quatre classes avec des capacitées variées offrants des styles de jeu
                            variés.
                        </p>
                        <p> Armez vous de votre classe préférée et rejoignez vos alliés dans un combat contre des vagues
                            d'ennemis de plus en plus fortes. Diversifiez vos stratégies en modifiant votre composition
                            d'équipe pour pouvoir allez le plus loin possible dans ce mode de jeu.
                        </p>

                    </div>
                    <div style={styles.slide}
                         className={"info"}
                    >
                        <h2><p>Outils utilisé</p></h2>

                        <div>
                            <a href="https://unity3d.com/fr"><img src={unity} alt=""/></a>
                            <br/>
                            <p>
                                Unity : Moteur du jeu
                            </p>
                        </div>


                        <div>
                            <a href="https://www.visualstudio.com/fr/"> <img src={visual} alt=""/></a>
                            <br/>
                            <p>
                                Visual studio : Logiciel de développement du code
                            </p>
                        </div>

                        <div>
                            <a href="http://www.monodevelop.com"><img src={mono} alt=""/></a>
                            <br/>
                            <p>
                                MonoDevelop : Logiciel de développement du code
                            </p>
                        </div>


                        <div>
                            <a href="https://github.com"><img src={git} alt=""/></a>
                            <br/>
                            <p>
                                Github : Hébergeur du site web
                            </p>
                        </div>


                        <div>
                            <a href="http://audacity.fr"><img src={auda} alt=""/></a>
                            <br/>
                            <p>
                                Audacity : Logiciel pour la gestion des sons
                            </p>
                        </div>


                        <div>
                            <a href="https://www.gimp.org"><img src={gimp} alt=""/></a>
                            <br/>
                            <p>
                                Gimp : Logiciel de développement d'image
                            </p>
                        </div>


                    </div>
                    <div style={styles.slide}
                         className={"info"}
                    >
                        <h2><p>Téléchargement Windows</p></h2>

                        <div>
                            <a href="https://www.dropbox.com/s/6shvuvvm30f0mwj/Hyperion%20windows.zip?dl=0"><img
                                src={win} alt=""/></a>
                            <br/>
                            <p>
                                Téléchargez dès aujourd'hui la dernière version d'Hyperion <a
                                href="https://www.dropbox.com/s/6shvuvvm30f0mwj/Hyperion%20windows.zip?dl=0">ici</a> et
                                profitez d'une aventure, seul ou entre amis, et tout ça accessible gratuitement !
                            </p>
                        </div>
                        <h2><p>Téléchargement MacOS</p></h2>
                        <div>
                            <a href="https://www.dropbox.com/s/g7t76x4qztmi1g9/Hyperion%20macos.app.zip?dl=0"><img
                                src={mac} alt=""/></a>
                            <br/>
                            <p>
                                La dernière version d'Hyperion pour macOs <a
                                href="https://www.dropbox.com/s/g7t76x4qztmi1g9/Hyperion%20macos.app.zip?dl=0">ici</a>
                                pour profitez d'une aventure gratuite incroyable.
                            </p>

                        </div>

                    </div>
                    <div style={styles.slide}
                         className={"introduction"}
                    >

                        <h2> Scénario des missions individuelles </h2>
                        <h3>Première mission : (Tutoriel)</h3>
                        <p>Alors que l’Hypérion orbite autour de la planète, des extraterrestres d'espèces
                            inconnues attaquent le campement avancé de la compagnie noire sur Gamma02.
                            Le médecin militaire dépêché sur place doit réagir vite.
                        </p>

                        <h3>Seconde mission : </h3>
                        <p>Pour enquêter sur la brève et mystérieuse attaque de Gamma02 le vaisseau et son
                            escouade sont envoyés suivre un mystérieux signal provenant d'une des lunes de la planète.
                            Une forte tête s'est portée volontaire pour une mission de reconnaissance et est parti
                            avec son arsenal sans attendre les renforts.</p>

                        <h3>Troisième mission : </h3>
                        <p>Le signal qui semblait provenir de la lune entière s'est beaucoup affaibli et
                            n'est plus perceptible qu'au niveau du Pôle Sud. Un expert des terrains dégagés est
                            déployé sur place
                        </p>
                        <h3>Quatrième mission : </h3>
                        <p>Le signal diminue bel et bien au fur et à mesure que ces aliens agressifs meurent.
                            Une unité spéciale est envoyé sur le lieu d'où provient cet onde étrange pour prendre
                            position et éradiquer toute forme de menace.
                        </p>

                    </div>
                    <div style={styles.slide}
                         className={"introduction"}>
                        <div>
                            <p> Le studio 404 est composé de quatres personnes, Louis Géraud, Romain Vidal, Paul Varet
                                et Thibault Lhuillier. Dans cette partie, toute l'équipe vous présente chacun leur
                                vision personnelle du Projet Hyperion.</p>
                            <div>
                                <h2>Louis Geraud
                                    <br/>
                                    <img src={lg} alt=""/>
                                </h2>
                                <p>Je vois ce projet d'un très bon œil, je pense qu'il y a vraiment matière à faire un
                                    bon jeu et pour moi à dépasser mes limites. Ce projet me semble à la fois être un
                                    excellent défi à réaliser mais aussi l’occasion de créer un jeu reflétant mes goûts
                                    et un curieux mélange de ceux de l’équipe au complet.</p>
                                <p> Dans ma scolarité j'ai toujours été intéressé par les mathématiques, dont la logique
                                    se rapproche beaucoup de la mienne. J'ai découvert la programmation plutôt
                                    tardivement, au cours du lycée, et je m'y suis énormément intéressé. J'ai débuté et
                                    appris quelques langages par moi-même mais je manquais d'exercices et de défis que
                                    je n'arrivait pas à me fixer.</p>
                                <p>J'ai finalement pu travailler ceci dans un cadre scolaire avec ma spécialité de
                                    terminale : l'Informatique et sciences du numérique. Au final après le bac et
                                    plusieurs hésitations d'orientation je me suis inscrit à la fac en section
                                    informatique avant de partir pour l'Epita, qui me semblait plus adaptée à ma façon
                                    de travailler et dont le programme me plaisait plus.</p>
                                <p>Avec ma spécialité ISN au lycée j’ai déjà eu l’occasion de réaliser plusieurs projets
                                    d’informatique mais rien d’aussi complet. Là il s'agit de développer un jeu incluant
                                    \\l'exploration d'un univers, des échanges de tirs et des combats mais aussi un
                                    grand aspect multijoueur et la gestions d'IA.</p>
                                <p> N’ayant jamais utilisé Unity je vois aussi l’occasion de découvrir un nouvel outil
                                    en même temps que j’améliorerai mes compétences en C$\sharp$. Je vais devoir
                                    vraiment me dépasser pour réaliser ce jeu comme je le veux dans un environnement
                                    encore peu familier.</p>
                                <p>L'aspect de travail de groupe m'intéresse aussi beaucoup. En effet, j'ai déjà
                                    participé à plusieurs projets de groupe au cours de ma scolarité, comme le fameux
                                    TPE en fin de lycée, dont quelques projets d'informatiques aussi mais je me sens
                                    encore peu à l'aise pour ces travaux d'équipe. Ce projet me tenant à cœur et ayant
                                    déjà réalisé quelques travaux avec les membres je suis très motivé et je suis
                                    persuadé que les résultats seront à la hauteur.</p>
                                <p>Comme je pense être aussi motivé que les autres membres du groupe je suis persuadé
                                    que ce projet sera une expérience des plus intéressantes et j’ai hâte de voir ce qui
                                    va en ressortir.</p>
                            </div>

                            <div>
                                <h2>Romain vidal
                                    <br/>
                                    <img src={rv} alt=""/>
                                </h2>
                                <p>Je suis venue a EPITA car je souhaitais poursuivre mes études dans l'informatique ,
                                    de plus hésitant à travailler dans le monde du jeu vidéo EPITA me semblais une très
                                    bonne option .</p>
                                <p> Je suis passionné de jeux vidéos, alors avoir à en créer un, c’est une bonne
                                    opportunité ! J’hésite à me tourner vers la conception de jeux, ce projet m’aidera a
                                    me décider.</p>
                                <p>Nous avons commencé à parler de ce projet avec mon groupe depuis le début du S1</p>
                                <p>Bien que nous avons changé d'avis sur quel type de jeu nous allions faire moult fois,
                                    nous somme enfin tombés d'accord.</p>
                                <p> J'ai déjà commencé à explorer Unity et je suis étonné de toute les possibilité que
                                    nous propose ce logiciel. Ce projet me permettra donc de m’améliorer en C$\sharp$ ,
                                    de donner libre cour a mon imagination tout en travaillant avec mon équipe bien
                                    aimée.
                                    J'attends vraiment beaucoup de ce projet aussi bien du faite que cela représente un
                                    défi de taille et un rêve.
                                    Mais aussi du faite que ce projet vas mettre mon groupe à l'épreuve d'un point de
                                    vue relationnel. </p>
                                <p>Je pense donc que ce projet sera déterminant concernant ma scolarité à EPITA , car il
                                    vas falloir bien s'organiser pour les soutenances , et réussir a crée un jeux vidéo
                                    de rien. </p>
                            </div>
                            <div>
                                <h2>Thibault Lhuillier
                                    <br/>
                                    <img src={tl} alt=""/>
                                </h2>
                                <p>Je vois dans la réalisation de ce projet beaucoup de points intéressants. Tout
                                    d’abord la capacité à relever un défi excitant qui est de crée son propre jeu vidéo.
                                    C’est une opportunité, qui finalement, n’est pas aussi facile et enfantine qu’elle
                                    en a l’aire au premier abord … </p>
                                <p> En effet, même si la finalité de ce projet est de créer un jeu, il y a bien d’autre
                                    buts atteindre avant d’y parvenir. Un point essentiel en tant que chef de projet est
                                    d’arriver à une bonne gestion d’équipe. Pouvoir développer un plan des taches
                                    claires et adapté en fonction de chacun demande une organisation considérable. </p>
                                <p>Un autre intérêt de ce projet est de tester et surpasser ses limites comme arriver à
                                    développer des travaux sur des sujets non abordés en cours.</p>
                                <p>Ce projet a donc un but très personnel car malgré la note finale du projet l’envie
                                    d’arriver à un jeu complet et abouti est très motivante.</p>
                                <p> Ce projet a donc comme intérêt de nous former à la manipulation de nouveaux outil
                                    tel que le moteur de jeu tel que Unity et une connaissance beaucoup plus poussé du
                                    c#</p>
                                <p>La gestion des soutenances et surtout de l’oral sera aussi un point formateur
                                    important. Savoir vendre son travail a un jury me parait essentiel pour la suite de
                                    notre parcours professionnel.</p>
                                <p>Finalement la gestion d’équipe, l’investissement personnel et la communication sont
                                    pour moi des points incontournables que ce projet nous aidera à approfondir.</p>
                            </div>
                            <div>
                                <h2>Paul Varet
                                    <br/>
                                    <img src={pv} alt=""/>
                                </h2>
                                <p>Je me présente Paul Varet alias "Paulack" (à cause de mes origines polonaises). Je
                                    suis un nouveau sharp arrivé directement en s1# d'une prépa MPSI où j'ai découvert
                                    ma passion pour l'informatique et plus tard pour le c#.</p>
                                <p> En effet je suis ce qu'on pourrait appeler un "geek", passionné de nouvelles
                                    technologies et de scripts .vbs et de .bat pour jouer avec l'ordinateur de mes
                                    collègues quand ils oublient de verrouiller leur session...</p>
                                <p> Le projet dans lequel nous nous lançons peut paraître ambitieux au premier regard,
                                    et certes, il l'est. Mais je penses que c'est quand on met la barre au plus haut,
                                    qu'on finis par s'envoler. S'envoler vers un univers créer par nos propres moyens, 8
                                    mains, 40 doigts, 112 phalanges et 3 cerveaux et demi. </p>
                                <p>Ce projet, je penses, peut être un véritable boost dans mes connaissances en C# et
                                    dans ma compréhension du jeu vidéo en général. Vous dire à quel point j'aime les
                                    jeux vidéos serait d'un manque amère d'originalité.</p>
                                <p>En effet apprendre le LaTeX en si peu de temps était pour moi un exploit, mais même
                                    si pour ce dernier j'ai due sacrifier ma vie sociale, ça valait le coût ! Je vais
                                    sûrement devoir la sacrifier pour ce projet de toute manière, et ce n'était que
                                    l'échauffement... Pour résumer je penses être très motivé à mener à bien ce projet
                                    avec mes collègues (ou sans), peu importe les obstacles rencontrés et les
                                    mésaventures envisageables...</p>
                            </div>

                        </div>
                    </div>
                </SwipeableViews>
            </div>
        );
    }
}
