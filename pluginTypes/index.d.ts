/// <amd-module name="@scom/scom-feed/data.json.ts" />
declare module "@scom/scom-feed/data.json.ts" {
    const _default: {
        ipfsGatewayUrl: string;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-feed/global/schemas.ts" />
declare module "@scom/scom-feed/global/schemas.ts" {
    export function getBuilderSchema(): {
        dataSchema: {
            type: string;
            required: string[];
            properties: {
                posts: {
                    type: string;
                    items: {
                        type: string;
                        properties: {};
                    };
                };
                dark: {
                    type: string;
                    properties: {
                        backgroundColor: {
                            type: string;
                            format: string;
                        };
                        fontColor: {
                            type: string;
                            format: string;
                        };
                        cardBackground: {
                            type: string;
                            format: string;
                        };
                        gradientBackground: {
                            type: string;
                            format: string;
                        };
                        primaryColor: {
                            type: string;
                            format: string;
                        };
                        primaryBackground: {
                            type: string;
                            format: string;
                        };
                        successColor: {
                            type: string;
                            format: string;
                        };
                        successBackground: {
                            type: string;
                            format: string;
                        };
                        errorColor: {
                            type: string;
                            format: string;
                        };
                        errorBackground: {
                            type: string;
                            format: string;
                        };
                        subcribeButtonBackground: {
                            type: string;
                            format: string;
                        };
                        placeholderColor: {
                            type: string;
                            format: string;
                        };
                        hoverBackgroundColor: {
                            type: string;
                            format: string;
                        };
                        groupBorderColor: {
                            type: string;
                            format: string;
                        };
                        borderColor: {
                            type: string;
                            format: string;
                        };
                        secondaryColor: {
                            type: string;
                            format: string;
                        };
                        modalBackground: {
                            type: string;
                            format: string;
                        };
                        boxShadow: {
                            type: string;
                            format: string;
                        };
                    };
                };
                light: {
                    type: string;
                    properties: {
                        backgroundColor: {
                            type: string;
                            format: string;
                        };
                        fontColor: {
                            type: string;
                            format: string;
                        };
                        cardBackground: {
                            type: string;
                            format: string;
                        };
                        gradientBackground: {
                            type: string;
                            format: string;
                        };
                        primaryColor: {
                            type: string;
                            format: string;
                        };
                        primaryBackground: {
                            type: string;
                            format: string;
                        };
                        successColor: {
                            type: string;
                            format: string;
                        };
                        successBackground: {
                            type: string;
                            format: string;
                        };
                        errorColor: {
                            type: string;
                            format: string;
                        };
                        errorBackground: {
                            type: string;
                            format: string;
                        };
                        subcribeButtonBackground: {
                            type: string;
                            format: string;
                        };
                        placeholderColor: {
                            type: string;
                            format: string;
                        };
                        hoverBackgroundColor: {
                            type: string;
                            format: string;
                        };
                        groupBorderColor: {
                            type: string;
                            format: string;
                        };
                        borderColor: {
                            type: string;
                            format: string;
                        };
                        secondaryColor: {
                            type: string;
                            format: string;
                        };
                        modalBackground: {
                            type: string;
                            format: string;
                        };
                        boxShadow: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
        };
        uiSchema: {
            type: string;
            elements: ({
                type: string;
                label: string;
                elements: {
                    type: string;
                    elements: {
                        type: string;
                        elements: {
                            type: string;
                            elements: {
                                type: string;
                                scope: string;
                            }[];
                        }[];
                        label: string;
                    }[];
                }[];
            } | {
                type: string;
                label: string;
                elements: {
                    type: string;
                    elements: {
                        type: string;
                        scope: string;
                    }[];
                }[];
            })[];
        };
    };
    export function getEmbedderSchema(): {
        dataSchema: {
            type: string;
            properties: {
                post: {
                    type: string;
                    required: boolean;
                    properties: {};
                };
                dark: {
                    type: string;
                    properties: {
                        backgroundColor: {
                            type: string;
                            format: string;
                        };
                        fontColor: {
                            type: string;
                            format: string;
                        };
                        cardBackground: {
                            type: string;
                            format: string;
                        };
                        gradientBackground: {
                            type: string;
                            format: string;
                        };
                        primaryColor: {
                            type: string;
                            format: string;
                        };
                        primaryBackground: {
                            type: string;
                            format: string;
                        };
                        successColor: {
                            type: string;
                            format: string;
                        };
                        successBackground: {
                            type: string;
                            format: string;
                        };
                        errorColor: {
                            type: string;
                            format: string;
                        };
                        errorBackground: {
                            type: string;
                            format: string;
                        };
                        subcribeButtonBackground: {
                            type: string;
                            format: string;
                        };
                        placeholderColor: {
                            type: string;
                            format: string;
                        };
                        hoverBackgroundColor: {
                            type: string;
                            format: string;
                        };
                        groupBorderColor: {
                            type: string;
                            format: string;
                        };
                        borderColor: {
                            type: string;
                            format: string;
                        };
                        secondaryColor: {
                            type: string;
                            format: string;
                        };
                        modalBackground: {
                            type: string;
                            format: string;
                        };
                        boxShadow: {
                            type: string;
                            format: string;
                        };
                    };
                };
                light: {
                    type: string;
                    properties: {
                        backgroundColor: {
                            type: string;
                            format: string;
                        };
                        fontColor: {
                            type: string;
                            format: string;
                        };
                        cardBackground: {
                            type: string;
                            format: string;
                        };
                        gradientBackground: {
                            type: string;
                            format: string;
                        };
                        primaryColor: {
                            type: string;
                            format: string;
                        };
                        primaryBackground: {
                            type: string;
                            format: string;
                        };
                        successColor: {
                            type: string;
                            format: string;
                        };
                        successBackground: {
                            type: string;
                            format: string;
                        };
                        errorColor: {
                            type: string;
                            format: string;
                        };
                        errorBackground: {
                            type: string;
                            format: string;
                        };
                        subcribeButtonBackground: {
                            type: string;
                            format: string;
                        };
                        placeholderColor: {
                            type: string;
                            format: string;
                        };
                        hoverBackgroundColor: {
                            type: string;
                            format: string;
                        };
                        groupBorderColor: {
                            type: string;
                            format: string;
                        };
                        borderColor: {
                            type: string;
                            format: string;
                        };
                        secondaryColor: {
                            type: string;
                            format: string;
                        };
                        modalBackground: {
                            type: string;
                            format: string;
                        };
                        boxShadow: {
                            type: string;
                            format: string;
                        };
                    };
                };
            };
        };
        uiSchema: {
            type: string;
            elements: ({
                type: string;
                label: string;
                elements: {
                    type: string;
                    elements: {
                        type: string;
                        elements: {
                            type: string;
                            elements: {
                                type: string;
                                scope: string;
                            }[];
                        }[];
                        label: string;
                    }[];
                }[];
            } | {
                type: string;
                label: string;
                elements: {
                    type: string;
                    elements: {
                        type: string;
                        scope: string;
                    }[];
                }[];
            })[];
        };
    };
}
/// <amd-module name="@scom/scom-feed/global/interface.ts" />
declare module "@scom/scom-feed/global/interface.ts" {
    import { IPost } from "@scom/scom-post";
    export interface IFeed {
        posts: IPost[];
        pinnedPosts?: IPost[];
    }
    export interface IPostExtended extends IPost {
        isPinned?: boolean;
    }
}
/// <amd-module name="@scom/scom-feed/global/API.ts" />
declare module "@scom/scom-feed/global/API.ts" {
    export const fetchGifs: (params: any) => Promise<any>;
    export const fetchReactionGifs: () => Promise<any>;
    export interface IEmojiCategory {
        name: string;
        value: string;
        image?: string;
        groups?: string[];
    }
    export interface IEmoji {
        name: string;
        category: string;
        group: string;
        htmlCode: string[];
        unicode: string[];
    }
    export const emojiCategories: {
        name: string;
        value: string;
        image: string;
        groups: string[];
    }[];
    export const colorsMapper: {
        'rgb(255, 220, 93)': {
            htmlCode: string;
            unicode: string;
        };
        'rgb(247, 222, 206)': {
            htmlCode: string;
            unicode: string;
        };
        'rgb(243, 210, 162)': {
            htmlCode: string;
            unicode: string;
        };
        'rgb(213, 171, 136)': {
            htmlCode: string;
            unicode: string;
        };
        'rgb(175, 126, 87)': {
            htmlCode: string;
            unicode: string;
        };
        'rgb(124, 83, 62)': {
            htmlCode: string;
            unicode: string;
        };
    };
    export const fetchEmojis: (params: any) => Promise<any>;
    export const searchEmojis: (q: string, mapper: Map<string, any>) => any;
}
/// <amd-module name="@scom/scom-feed/global/index.ts" />
declare module "@scom/scom-feed/global/index.ts" {
    export * from "@scom/scom-feed/global/schemas.ts";
    export * from "@scom/scom-feed/global/interface.ts";
    export * from "@scom/scom-feed/global/API.ts";
}
/// <amd-module name="@scom/scom-feed/store/index.ts" />
declare module "@scom/scom-feed/store/index.ts" {
    import { IAuthor } from "@scom/scom-post";
    export const state: {
        ipfsGatewayUrl: string;
    };
    export const setDataFromJson: (options: any) => void;
    export const setIPFSGatewayUrl: (url: string) => void;
    export const getIPFSGatewayUrl: () => string;
    export const getCurrentUser: () => IAuthor;
}
/// <amd-module name="@scom/scom-feed/index.css.ts" />
declare module "@scom/scom-feed/index.css.ts" {
    export const getHoverStyleClass: (color?: string) => string;
    export const getActionButtonStyle: (hoveredColor: string) => string;
    export const comboboxStyle: string;
}
/// <amd-module name="@scom/scom-feed/translations.json.ts" />
declare module "@scom/scom-feed/translations.json.ts" {
    const _default_1: {
        en: {
            are_you_sure: string;
            cancel: string;
            delete_note: string;
            do_you_really_want_to_delete_this_note: string;
            edit: string;
            pin_note: string;
            post_your_thoughts: string;
            post: string;
            unpin_note: string;
            whats_happening: string;
            whats_on_your_mind_today: string;
        };
        "zh-hant": {
            are_you_sure: string;
            cancel: string;
            delete_note: string;
            do_you_really_want_to_delete_this_note: string;
            edit: string;
            pin_note: string;
            post_your_thoughts: string;
            post: string;
            unpin_note: string;
            whats_happening: string;
            whats_on_your_mind_today: string;
        };
        vi: {
            are_you_sure: string;
            cancel: string;
            delete_note: string;
            do_you_really_want_to_delete_this_note: string;
            edit: string;
            pin_note: string;
            post_your_thoughts: string;
            post: string;
            unpin_note: string;
            whats_happening: string;
            whats_on_your_mind_today: string;
        };
    };
    export default _default_1;
}
/// <amd-module name="@scom/scom-feed" />
declare module "@scom/scom-feed" {
    import { ControlElement, Module, Container, Markdown, IDataSchema, IUISchema, Control, IComboItem } from '@ijstech/components';
    import { IFeed, IPostExtended } from "@scom/scom-feed/global/index.ts";
    import { IPostData, ScomPost } from '@scom/scom-post';
    type callbackType = (target: ScomPost, event?: MouseEvent) => void;
    type asyncCallbackType = (target: ScomPost, event?: MouseEvent) => Promise<boolean>;
    type submitCallbackType = (content: string, medias: IPostData[], audience?: string) => void;
    type pinCallbackType = (post: any, action: 'pin' | 'unpin', event?: MouseEvent) => Promise<void>;
    type deleteCallbackType = (post: any) => Promise<void>;
    type openDesignerCallback = (target: Control, data: any) => Promise<void>;
    interface IPostContextMenuAction {
        caption: string;
        icon?: {
            name: string;
            fill?: string;
        };
        tooltip?: string;
        onClick?: (target: ScomPost, post: IPostExtended, event?: MouseEvent) => Promise<void>;
    }
    interface IPostFilter {
        property: string;
        caption?: string;
        placeholder?: string;
        items: IComboItem[];
        isMulti?: boolean;
        defaultItems?: IComboItem[];
    }
    interface ScomFeedElement extends ControlElement {
        data?: IFeed;
        isListView?: boolean;
        theme?: Markdown["theme"];
        composerPlaceholder?: string;
        isComposerVisible?: boolean;
        onItemClicked?: callbackType;
        onPostButtonClicked?: submitCallbackType;
        env?: string;
        onLikeButtonClicked?: asyncCallbackType;
        onRepostButtonClicked?: callbackType;
        onZapButtonClicked?: callbackType;
        avatar?: string;
        allowDelete?: boolean;
        allowPin?: boolean;
        apiBaseUrl?: string;
        pinNoteToTop?: boolean;
        onDeleteButtonClicked?: deleteCallbackType;
        onPinButtonClicked?: pinCallbackType;
        onBookmarkButtonClicked?: callbackType;
        onCommunityButtonClicked?: callbackType;
        onUnlockPostButtonClicked?: asyncCallbackType;
        onOpenDesigner?: openDesignerCallback;
        onAvatarClick?: (npub: string) => void;
        isPostAudienceShown?: boolean;
        isPublicPostLabelShown?: boolean;
        postContextMenuActions?: IPostContextMenuAction[];
        filters?: IPostFilter[];
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-feed']: ScomFeedElement;
            }
        }
    }
    export default class ScomFeed extends Module {
        private pnlInput;
        private inputReply;
        private pnlPosts;
        private pnlFilter;
        private pnlCustomFilters;
        private btnMore;
        private mdActions;
        private pnlActions;
        private pnlLoading;
        private mdCreatePost;
        private inputCreatePost;
        private mdDeleteConfirm;
        private currentContent;
        private currentPost;
        private isRendering;
        private _data;
        private _isListView;
        private _theme;
        private _isComposerVisible;
        private _composerPlaceholder;
        private env;
        private _allowDelete;
        private _allowPin;
        private _pinNoteToTop;
        private _pinnedNotes;
        private pinnedNoteIds;
        private btnPinAction;
        private selectedPost;
        private _apiBaseUrl;
        private _isPublicPostLabelShown;
        private _filters;
        private postElementMap;
        private observerOptions;
        private observer;
        private filterMap;
        onItemClicked: callbackType;
        onPostButtonClicked: submitCallbackType;
        onLikeButtonClicked: asyncCallbackType;
        onRepostButtonClicked: callbackType;
        onZapButtonClicked: callbackType;
        onDeleteButtonClicked: deleteCallbackType;
        onPinButtonClicked: pinCallbackType;
        onBookmarkButtonClicked: callbackType;
        onCommunityButtonClicked: callbackType;
        onUnlockPostButtonClicked: asyncCallbackType;
        onOpenDesigner: openDesignerCallback;
        onAvatarClick: (npub: string) => void;
        private _postContextMenuActions;
        tag: {
            light: {};
            dark: {};
        };
        constructor(parent?: Container, options?: any);
        static create(options?: ScomFeedElement, parent?: Container): Promise<ScomFeed>;
        get posts(): IPostExtended[];
        set posts(value: IPostExtended[]);
        get isListView(): boolean;
        set isListView(value: boolean);
        set theme(value: Markdown["theme"]);
        get theme(): Markdown["theme"];
        get isComposerVisible(): boolean;
        set isComposerVisible(value: boolean);
        get composerPlaceholder(): string;
        set composerPlaceholder(value: string);
        get avatar(): string;
        set avatar(value: string);
        get allowDelete(): boolean;
        set allowDelete(value: boolean);
        get allowPin(): boolean;
        set allowPin(value: boolean);
        get isSmallScreen(): boolean;
        get pinNoteToTop(): boolean;
        set pinNoteToTop(value: boolean);
        get pinnedNotes(): IPostExtended[];
        set pinnedNotes(posts: IPostExtended[]);
        get apiBaseUrl(): string;
        set apiBaseUrl(value: string);
        get isPostAudienceShown(): boolean;
        set isPostAudienceShown(value: boolean);
        get isPublicPostLabelShown(): boolean;
        set isPublicPostLabelShown(value: boolean);
        get hasQuota(): boolean;
        set hasQuota(value: boolean);
        get postContextMenuActions(): IPostContextMenuAction[];
        set postContextMenuActions(actions: IPostContextMenuAction[]);
        get filters(): IPostFilter[];
        set filters(value: IPostFilter[]);
        private get filteredPosts();
        private _filterPost;
        controlInputDisplay(): void;
        connectedCallback(): void;
        clear(): void;
        showLoading(): void;
        hideLoading(): void;
        private setData;
        private getData;
        private renderUI;
        private onCopyNoteText;
        private getFieldValue;
        private onFilterChanged;
        private renderFilters;
        private renderActions;
        private onViewPost;
        private onReplySubmit;
        private handleUnlockPostButtonClicked;
        constructPostElement(post: IPostExtended, lazyLoad?: boolean): ScomPost;
        private sortPosts;
        removePost(post: IPostExtended): void;
        addPost(post: IPostExtended, isPrepend?: boolean): ScomPost;
        addPosts(posts: IPostExtended[], isPrepend?: boolean): void;
        setPosts(posts: IPostExtended[]): void;
        private addPostToPanel;
        private renderPosts;
        private onCloseModal;
        private onShowModal;
        private showActionModal;
        private removeShow;
        getConfigurators(): ({
            name: string;
            target: string;
            getActions: () => {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                userInputDataSchema: IDataSchema;
                userInputUISchema: IUISchema;
            }[];
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
            getLinkParams?: undefined;
            setLinkParams?: undefined;
        } | {
            name: string;
            target: string;
            getActions: () => {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                userInputDataSchema: IDataSchema;
                userInputUISchema: IUISchema;
            }[];
            getLinkParams: () => {
                data: string;
            };
            setLinkParams: (params: any) => Promise<void>;
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        })[];
        private _getActions;
        private getTag;
        private updateTag;
        private setTag;
        private updateStyle;
        private updateTheme;
        init(): void;
        onShow(options: any): void;
        private handleModalClose;
        private deleteNote;
        render(): any;
    }
}
