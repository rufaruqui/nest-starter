'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mgh documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-5624adb8b33889282e882e25f0fea65b43f39ca51c92be23b78bc3fb67332ad0adf8a7870f2d5918616688248eb6025569de673e2e5daeed7e8e66ed692aca46"' : 'data-target="#xs-controllers-links-module-AppModule-5624adb8b33889282e882e25f0fea65b43f39ca51c92be23b78bc3fb67332ad0adf8a7870f2d5918616688248eb6025569de673e2e5daeed7e8e66ed692aca46"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-5624adb8b33889282e882e25f0fea65b43f39ca51c92be23b78bc3fb67332ad0adf8a7870f2d5918616688248eb6025569de673e2e5daeed7e8e66ed692aca46"' :
                                            'id="xs-controllers-links-module-AppModule-5624adb8b33889282e882e25f0fea65b43f39ca51c92be23b78bc3fb67332ad0adf8a7870f2d5918616688248eb6025569de673e2e5daeed7e8e66ed692aca46"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-5624adb8b33889282e882e25f0fea65b43f39ca51c92be23b78bc3fb67332ad0adf8a7870f2d5918616688248eb6025569de673e2e5daeed7e8e66ed692aca46"' : 'data-target="#xs-injectables-links-module-AppModule-5624adb8b33889282e882e25f0fea65b43f39ca51c92be23b78bc3fb67332ad0adf8a7870f2d5918616688248eb6025569de673e2e5daeed7e8e66ed692aca46"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-5624adb8b33889282e882e25f0fea65b43f39ca51c92be23b78bc3fb67332ad0adf8a7870f2d5918616688248eb6025569de673e2e5daeed7e8e66ed692aca46"' :
                                        'id="xs-injectables-links-module-AppModule-5624adb8b33889282e882e25f0fea65b43f39ca51c92be23b78bc3fb67332ad0adf8a7870f2d5918616688248eb6025569de673e2e5daeed7e8e66ed692aca46"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PostsModule-12f829a5e7c1332af94b756085ed12834e73baa7a9317588e579e3780f2483104585364d894701e60ec02d33b7d5466495ce1007bb6a7fc2e0ce732a456889f7"' : 'data-target="#xs-controllers-links-module-PostsModule-12f829a5e7c1332af94b756085ed12834e73baa7a9317588e579e3780f2483104585364d894701e60ec02d33b7d5466495ce1007bb6a7fc2e0ce732a456889f7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-12f829a5e7c1332af94b756085ed12834e73baa7a9317588e579e3780f2483104585364d894701e60ec02d33b7d5466495ce1007bb6a7fc2e0ce732a456889f7"' :
                                            'id="xs-controllers-links-module-PostsModule-12f829a5e7c1332af94b756085ed12834e73baa7a9317588e579e3780f2483104585364d894701e60ec02d33b7d5466495ce1007bb6a7fc2e0ce732a456889f7"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PostsModule-12f829a5e7c1332af94b756085ed12834e73baa7a9317588e579e3780f2483104585364d894701e60ec02d33b7d5466495ce1007bb6a7fc2e0ce732a456889f7"' : 'data-target="#xs-injectables-links-module-PostsModule-12f829a5e7c1332af94b756085ed12834e73baa7a9317588e579e3780f2483104585364d894701e60ec02d33b7d5466495ce1007bb6a7fc2e0ce732a456889f7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-12f829a5e7c1332af94b756085ed12834e73baa7a9317588e579e3780f2483104585364d894701e60ec02d33b7d5466495ce1007bb6a7fc2e0ce732a456889f7"' :
                                        'id="xs-injectables-links-module-PostsModule-12f829a5e7c1332af94b756085ed12834e73baa7a9317588e579e3780f2483104585364d894701e60ec02d33b7d5466495ce1007bb6a7fc2e0ce732a456889f7"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-198bc3c7ca3d39a9d55003c767ab847964ed4f1682d25a2cfd938b2de62f0e5314e9fd4681f448360feffe2dbad9f11790c9b42fbbbb8badc12c300e272286c2"' : 'data-target="#xs-controllers-links-module-UsersModule-198bc3c7ca3d39a9d55003c767ab847964ed4f1682d25a2cfd938b2de62f0e5314e9fd4681f448360feffe2dbad9f11790c9b42fbbbb8badc12c300e272286c2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-198bc3c7ca3d39a9d55003c767ab847964ed4f1682d25a2cfd938b2de62f0e5314e9fd4681f448360feffe2dbad9f11790c9b42fbbbb8badc12c300e272286c2"' :
                                            'id="xs-controllers-links-module-UsersModule-198bc3c7ca3d39a9d55003c767ab847964ed4f1682d25a2cfd938b2de62f0e5314e9fd4681f448360feffe2dbad9f11790c9b42fbbbb8badc12c300e272286c2"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-198bc3c7ca3d39a9d55003c767ab847964ed4f1682d25a2cfd938b2de62f0e5314e9fd4681f448360feffe2dbad9f11790c9b42fbbbb8badc12c300e272286c2"' : 'data-target="#xs-injectables-links-module-UsersModule-198bc3c7ca3d39a9d55003c767ab847964ed4f1682d25a2cfd938b2de62f0e5314e9fd4681f448360feffe2dbad9f11790c9b42fbbbb8badc12c300e272286c2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-198bc3c7ca3d39a9d55003c767ab847964ed4f1682d25a2cfd938b2de62f0e5314e9fd4681f448360feffe2dbad9f11790c9b42fbbbb8badc12c300e272286c2"' :
                                        'id="xs-injectables-links-module-UsersModule-198bc3c7ca3d39a9d55003c767ab847964ed4f1682d25a2cfd938b2de62f0e5314e9fd4681f448360feffe2dbad9f11790c9b42fbbbb8badc12c300e272286c2"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});