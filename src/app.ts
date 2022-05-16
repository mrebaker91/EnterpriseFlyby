/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import * as MRE from '@microsoft/mixed-reality-extension-sdk';

//
/**
 * The main class of this app. All the logic goes here.
 */
 //
export default class EnterpriseFlyby {
	private kitItem: MRE.Actor = null;
	private assets: MRE.AssetContainer;
//
	constructor(private context: MRE.Context) {
		this.context.onStarted(() => this.started());
	}
	/**
	 * Once the context is "started", initialize the app.
	 */
	private started() {
		// container for assets like Enterprise Kit
		this.assets = new MRE.AssetContainer(this.context);

		// Create a new actor with no mesh, but some text.  Enterprise Kit
		this.kitItem = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:1840915634855084279'
		});
		this.pulseActor(this.kitItem);
	}
//
	// asyncronous function so we can use await function
	private async pulseActor(actor: MRE.Actor){
		actor.transform.local.scale = { x: 25, y: 25, z: 25 } as MRE.Vector3;
		//define variables for size management inside loops
		let Xpos = 0;
		let Ypos = 0;
		let Yloop = 0;
		let Zloop = -1200;
		//Height loop
			//reset forward variables to reposition MRE
			Yloop = 0;
			Zloop = -800;
			Ypos = 200;
			//set up MRE just outside of the skybox
			actor.transform.local.position = { x: 0 , y: 200, z: -800 } as MRE.Vector3;
	}		
}
