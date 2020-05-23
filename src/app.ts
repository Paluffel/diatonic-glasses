/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
	Actor,
	ButtonBehavior,
	Collider,
	ColliderGeometry,
	CollisionLayer,
	Context,
	DegreesToRadians,
	Quaternion,
	TextAnchorLocation,
	User,
	Vector3
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import * as MRESDK from '@microsoft/mixed-reality-extension-sdk';

export default class HelloWorld {
	public expectedResultDescription = "Different grabbable items.";

	constructor(private context: Context, private baseUrl: string) {
		this.context.onUserJoined((user) => this.userJoined(user));
	}

	// Create list to keep track of items attached to users.
	private attachedItems: {[id: string]: Actor} = {};

    private userJoined(user: User) {
        // Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === "Diatonic"){
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1478474207850397878",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'head'
                    },
                    transform: {local: {
                        position: { x: 0.00012, y: -1.665, z: -0.012 },
                        scale: { x: 1, y: 1, z: 1},
                       
                    }}
                }
            });
		     // Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === "Diatonic"){
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1472538491718992799",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'spine-middle'
                    },
                    transform: {local: {
                        position: { x: 0, y: 0, z: 0},
                        scale: { x: 1, y: 1, z: 1},
                       
                    }}
                }
            });
		        // Code to run when a user joins.
        console.log(`User joined: ${user.name}`);
        console.log(user);
        if (user.name === "Diatonic"){
            Actor.CreateFromLibrary(this.context, {
                resourceId: "artifact: 1472538483196167064",
                actor: {
                    name: 'Retro',
                    attachment: {
                        userId: user.id,
                        attachPoint: 'head'
                    },
                    transform: {local: {
                        position: { x: 0, y: 0, z: 0 },
                        scale: { x: 1, y: 1, z: 1},
                       
                    }}
                }
            });
    }
}
}
    }
}
