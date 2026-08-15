extends CharacterBody3D

# How fast the player moves in meters per second.
@export var speed = 14
# The downward acceleration when in the air, in meters per second squared.
@export var fall_acceleration = 75

var target_velocity = Vector3.ZERO

# The AnimationPlayer that lives inside the glTF model. It holds the
# model's embedded animations, "Idle" and "Run".
@onready var skeleton_animation_player = $Pivot/Character/AnimationPlayer


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

    if direction != Vector3.ZERO:
        direction = direction.normalized()
        # Setting the basis property will affect the rotation of the node.
        $Pivot.basis = Basis.looking_at(direction)

    # --- Character animation ---
    # Play the model's Run cycle while the player is moving, and the Idle
    # cycle when they are standing still.
    if direction != Vector3.ZERO:
        skeleton_animation_player.play("Run")
        # Speed the run cycle up so the legs keep pace with the character.
        skeleton_animation_player.speed_scale = 4
    else:
        skeleton_animation_player.play("Idle")
        skeleton_animation_player.speed_scale = 1

    # Ground Velocity
    target_velocity.x = direction.x * speed
    target_velocity.z = direction.z * speed
