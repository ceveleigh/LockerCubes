public var cube2 : GameObject;

private var reset : boolean;

private var one : boolean;
private var two : boolean;
private var three : boolean;
private var four : boolean;
private var five : boolean;
private var six : boolean;
private var oneDimensions : Vector3;
private var twoDimensions : Vector3;
private var threeDimensions : Vector3;
private var fourDimensions : Vector3;
private var fiveDimensions : Vector3;
private var sixDimensions : Vector3;

private var rotationDeg : float;

private var startCube : boolean;
private var startCubeTime : float;

function Start () {
	//stages in rotation
	one=true;
	two=false;
	three=false;
	four=false;
	five=false;
	six=false;
	
	rotationDeg = .1;
	
	//set dimensions for cube so it lerps to the ratio of the locker at all angles
	oneDimensions = Vector3(0.925,1.1,0.925);
	twoDimensions = Vector3(1.1,0.925,0.925);
	threeDimensions = Vector3(1.1,0.925,0.925);
	fourDimensions = Vector3(1.1,.925,1.1);
	fiveDimensions = Vector3(.925,1.1,1.1);
	sixDimensions = Vector3(0.925,1.1,0.925);
	
	//reset rotation
	reset = true;
	startCube = false;
}


function Update () {
	if(startCubeTime  > 240){
		startCube = true;
		startCubeTime = 0;	
	}
	startCubeTime+=1;
	Debug.Log(startCubeTime);
		//reset position
		if(reset){
				cube2.transform.rotation = Quaternion.identity;
				one = true; //start spinning
				reset=false;
				startCube=false;
		}
		
	if(startCube){
		
	//spin cycles
	if(one){
		cube2.transform.Rotate(Vector3(0,rotationDeg,0) * 20);
		cube2.transform.localScale = Vector3.Lerp(cube2.transform.localScale,oneDimensions,Time.deltaTime);
		cube2.transform.position.z = Mathf.Lerp(cube2.transform.position.z, -2.482915, Time.deltaTime);
		if(cube2.transform.eulerAngles.y >= 90){
				two=true;
			one=false;
		}
		Debug.Log("step1 - spin left");
	}
	if(two){
		cube2.transform.Rotate(Vector3(0,0,rotationDeg) * 20);
		cube2.transform.localScale = Vector3.Lerp(cube2.transform.localScale,twoDimensions,Time.deltaTime);
			cube2.transform.position.z = Mathf.Lerp(cube2.transform.position.z, -6, Time.deltaTime);
		if(cube2.transform.eulerAngles.z >= 90){
			three=true;
			two=false;
		}
		Debug.Log("step2 - spin up");
	}
	if(three){
		cube2.transform.Rotate(Vector3(-rotationDeg,0,0) * 20);
		cube2.transform.localScale = Vector3.Lerp(cube2.transform.localScale,threeDimensions,Time.deltaTime);
			cube2.transform.position.z = Mathf.Lerp(cube2.transform.position.z, -2.482915, Time.deltaTime);
		if(cube2.transform.eulerAngles.y <=2){
			four=true;
			three=false;
		}
		Debug.Log("step3 - spin right");
	}
	if(four){
		cube2.transform.Rotate(Vector3(0,rotationDeg,0) * 20);
		cube2.transform.localScale = Vector3.Lerp(cube2.transform.localScale,fourDimensions,Time.deltaTime);
			cube2.transform.position.z = Mathf.Lerp(cube2.transform.position.z, -6, Time.deltaTime);
		if(cube2.transform.eulerAngles.x <= 270){
			five=true;
			four=false;
		}
		Debug.Log("step4 - spin down");
	}
	if(five){
		cube2.transform.Rotate(Vector3(0,0,rotationDeg) * -20);
		cube2.transform.localScale = Vector3.Lerp(cube2.transform.localScale,fiveDimensions,Time.deltaTime);
		cube2.transform.position.z = Mathf.Lerp(cube2.transform.position.z, -2.482915, Time.deltaTime);
		if(cube2.transform.eulerAngles.y <= 1){
			six=true;
			five=false;
		}
		Debug.Log("step5 - spin right");
	}
	if(six){
		cube2.transform.Rotate(Vector3(rotationDeg,0,0) * 10);
		cube2.transform.localScale = Vector3.Lerp(cube2.transform.localScale,sixDimensions,Time.deltaTime);
				cube2.transform.position.z = Mathf.Lerp(cube2.transform.position.z, -5.482915, Time.deltaTime);
		if(cube2.transform.eulerAngles.x >= 358){
			reset=true; //reset postion
			six=false;
		}
		Debug.Log("step6 - spin up");
	}
	}
}