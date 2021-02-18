const mongoose=require('mongoose');
const durationSchema = new mongoose.Schema(
    {
      start_time: { type: String, required: true },
      end_time: { type: String, required: true },      
    }
  );
const memberSchema = new mongoose.Schema(
    {
      id: { type: String, required: true, unique: true },
      real_name:{type:String,required:true},
      tz:{type:String,required:true},
      activity_periods:[durationSchema]
    },
    {
      timestamps: true,
    }
  )
  const Member = mongoose.model('Member', memberSchema);
  
  module.exports=Member;
  