extends CharacterBody3D

# How fast the player moves in meters per second.
@export var speed = 14
# The downward acceleration when in the air, in meters per second squared.
@export var fall_acceleration = 75

var target_velocity = Vector3.ZERO


func _physics_process(delta):
    # We create a local variable to store the input direction.
    var direction = Vector3.ZERO

    # Get the input direction and handle moving the player.
    # Input.get_vector() returns a 2D vector with analog values from joysticks
    # and digital values (-1, 0, 1) from keyboard. This gives us smooth 360-degree
    # movement from touch joysticks while still working perfectly with keyboards.
    var input_dir = Input.get_vector("move_left", "move_right", "move_forward", "move_back")
    # Convert the 2D input to 3D. Notice how we are working with the x and z axes.
    # In 3D, the XZ plane is the ground plane.
    direction = Vector3(input_dir.x, 0, input_dir.y)
